import { DataloaderContext } from '../../../_types/_backendTypes/dataloaderContext'
import * as typeDefs from './typeDefs.graphql'
import dataloaders, { EventRegistrationDataloaders } from './dataloaders'
import mutations from './mutations'
import queries from './queries'
import resolvers from './resolvers'

export default {
  dataloaders: (dataloaderContext: DataloaderContext): EventRegistrationDataloaders =>
    dataloaders(dataloaderContext),
  typeDefs,
  resolvers: {
    ...resolvers,
    Query: queries,
    Mutation: mutations
  }
}
