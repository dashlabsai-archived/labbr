import sample from './sample'
import { gql } from 'apollo-server-express'
import { Dataloaders } from '../../_types/_backendTypes/dataloaders'
import { DataloaderContext } from '../../_types/_backendTypes/dataloaderContext'

import users from './users'
import eventRegistrations from './eventRegistration'

const emptyDefs = gql`
  type Query
  type Mutation

  scalar Date
`

export const resolvers = [
  eventRegistrations.resolvers,
  sample.resolvers,
  users.resolvers
]

export const typeDefs = [
  emptyDefs,
  eventRegistrations.typeDefs,
  sample.typeDefs,
  users.typeDefs
]

export const buildDataloaders = (
  dataloaderContext: DataloaderContext
): Dataloaders => ({
  eventRegistrations: eventRegistrations.dataloaders(dataloaderContext),
  users: users.dataloaders(dataloaderContext)
})
