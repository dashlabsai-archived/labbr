import { Database } from './database'
import { User } from '../users'

export interface DataloaderContext {
  database: Database
  returnCurrentUser: () => Promise<User>
}