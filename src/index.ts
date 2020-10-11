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

import { Db, MongoClient } from 'mongodb'

import { resolvers, typeDefs } from './backend/controllers'
import { Context } from './_types/_backendTypes/context'
import { verifyJWT } from './backend/_utils/JWT-TEMPLATE'

import { Database } from './_types/_backendTypes/database'


const mongoUri: string = process.env.DB_URI
console.log(mongoUri)

const app = express()
app.set('trust proxy', true)
app.use(cors())
app.use(compression())

const dev = process.env.NODE_ENV !== 'production'
const nextJSApp = next({ dir: './src/frontend', dev })
const handle = nextJSApp.getRequestHandler()


nextJSApp.prepare().then(async () => {
  // try {
  const mongoClient: MongoClient = await MongoClient.connect(mongoUri, {
    useUnifiedTopology: true
  })

  const db: Db = mongoClient.db('labbr')

  const database: Database = {
    users: db.collection('users')
  }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, connection }): Promise<Context> => {
      const headers = connection?.context?.headers || req?.headers
      const ip = req.headers['CF-Connecting-IP'] || req.headers['X-Forwarded-For'] || req.ip

      return {
        ip,
        currentUserId: verifyJWT(headers.accesstoken)?.id,
        database
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
  server.applyMiddleware({ app, path: '/graphql' })

  app.use((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  app.listen(process.env.PORT || 3000, () => {
    console.log('Server Ready')
  })
})
