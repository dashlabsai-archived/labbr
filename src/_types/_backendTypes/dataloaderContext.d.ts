import { Database } from './database'
import { User } from '../users'

export interface DataloaderContext {
  databse: Database
  returnCurrentUser: () => Promise<User>
}