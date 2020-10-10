import sample from './sample'
import { gql } from 'apollo-server-express'
import { Dataloaders } from '../../_types/_backendTypes/dataloaders'
import { DataloaderContext } from '../../_types/_backendTypes/dataloaderContext'

import users from './users'

const emptyDefs = gql`
  type Query
  type Mutation

  scalar Date
`

export const resolvers = [
  sample.resolvers,
  users.resolvers
]

export const typeDefs = [
  emptyDefs,
  sample.typeDefs,
  users.typeDefs
]

export const buildDataloaders = (
  dataloaderContext: DataloaderContext
): Dataloaders => ({
  users: users.dataloaders(dataloaderContext)
})
