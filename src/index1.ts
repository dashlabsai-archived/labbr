require('dotenv').config()
import 'graphql-import-node'

import { ApolloServer, IResolvers } from 'apollo-server-express'
import { GraphQLFormattedError, GraphQLError, DocumentNode } from 'graphql'
import compression from 'compression'
import cors from 'cors'
import * as http from 'http'
import express from 'express'
// import helmet from 'helmet'
import { Db, MongoClient } from 'mongodb'

import { resolvers, typeDefs, buildDataloaders } from './backend/controllers'
import { Context } from './_types/_backendTypes/context'
import _returnCurrentUser from './backend/_utils/_returnCurrentUser'
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer'

import { User } from './_types/users'
import { Database } from './_types/_backendTypes/database'

const mongoUri: string = process.env.DB_URI

const app = express()
app.set('trust proxy', true)
app.use(cors())
app.use(compression())


const apolloApp = async (): Promise<void> => {
  try {
    const mongoClient: MongoClient = await MongoClient.connect(mongoUri, {
      useUnifiedTopology: true
    })

    const db: Db = mongoClient.db('labbr')

    const database: Database = {
      users: db.collection('users')
    }
    const server = new ApolloServer({
      resolvers: resolvers as Array<IResolvers>,
      typeDefs: typeDefs as Array<DocumentNode>,
      context: (context: ExpressContext): Context => {
        const req: express.Request = context.req
        const headers: http.IncomingHttpHeaders = req.headers

        const returnCurrentUser = (): Promise<User | null> =>
          _returnCurrentUser(headers, database)

          return {
            dataloaders: buildDataloaders({
              database,
              returnCurrentUser
            }),
            database,
            returnCurrentUser
          }
      },
      formatError: (error: GraphQLError): GraphQLFormattedError => {
        console.log(error)
        return error
      }
    })

    server.applyMiddleware({ app, path: '/graphql' })

  const httpServer = http.createServer(app)
  httpServer.setTimeout(10 * 60 * 1000)
  server.installSubscriptionHandlers(httpServer)

  httpServer.listen(process.env.PORT, () => {
    const successMessage = `${process.env.NODE_SERVER}: 🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}\n${process.env.NODE_SERVER}: 🚀 Subscriptions ready at ws://localhost:${process.env.PORT}${server.subscriptionsPath}`
    console.log(successMessage)
  })
  } catch (error) {
    const failMessage = `Server failed at ${process.env.NODE_SERVER}\n${error}`
    console.log(failMessage)
  }
}

apolloApp()
// const scriptSrc = [
//   "'self'",
//   'www.gstatic.com',
//   '*.googleapis.com',
//   'https://www.google-analytics.com/analytics.js',
//   'https://www.googletagmanager.com/gtag/js'
// ]

// const styleSrc = ["'self'", "'unsafe-inline'", 'www.gstatic.com', '*.googleapis.com']

// if (process.env.NODE_ENV) {
//   app.use(helmet())
//   app.use(helmet.frameguard({ action: 'deny' }))
//   app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
//   app.use(
//     helmet.contentSecurityPolicy({
//       directives: {
//         defaultSrc: ["'none'"],
//         fontSrc: ["'self'", 'data:', 'https:'],
//         imgSrc: ["'self'", 'data:', 'https:'],
//         connectSrc: ["'self'"],
//         scriptSrc,
//         styleSrc
//       }
//     })
//   )
// }

