require('dotenv').config()
import 'graphql-import-node'

import { ApolloServer, AuthenticationError, ForbiddenError, UserInputError } from 'apollo-server-express'
import { GraphQLFormattedError, GraphQLError } from 'graphql'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
// import helmet from 'helmet'
import next from 'next'
import { parse } from 'url'

import { resolvers, typeDefs } from './backend/controllers'
import { Context } from './_types/_backendTypes/context'
import { verifyJWT } from './backend/_utils/JWT-TEMPLATE'

import { MikroORM } from '@mikro-orm/core'
import { RequestContext } from '@mikro-orm/core'

import { BaseEntity, User } from './backend/entities'
const mongoUri: string = process.env.DB_URI


const app = express()
app.set('trust proxy', true)
app.use(cors())
app.use(compression())

const dev = process.env.NODE_ENV !== 'production'
const nextJSApp = next({ dir: './src/frontend', dev })
const handle = nextJSApp.getRequestHandler()

nextJSApp.prepare().then(async() => {
  const orm = await MikroORM.init({
    entities: [User, BaseEntity],
    dbName: 'labbr',
    type: 'mongo',
    clientUrl: mongoUri
  })

  return orm
}).then((orm) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, connection }): Promise<Context> => {
      const headers = connection?.context?.headers || req?.headers
      const ip = req.headers['CF-Connecting-IP'] || req.headers['X-Forwarded-For'] || req.ip

      return {
        ip,
        currentUserId: verifyJWT(headers.accesstoken)?.id
      }
    },
    formatError: (error: GraphQLError): GraphQLFormattedError => {
      if (
        !(
          error.originalError instanceof AuthenticationError ||
          error.originalError instanceof ForbiddenError ||
          error.originalError instanceof UserInputError
        )
      ) {
        console.error(error)
      }
      return error
    }
  })

  app.use((req, res, next) => {
    RequestContext.create(orm.em, next)
  })

  server.applyMiddleware({ app, path: '/graphql' })

  app.use((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  app.listen(process.env.PORT || 3000, () => {
    console.log('Server Ready')
  })
})
