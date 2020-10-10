import { Database } from './database'
import { Dataloaders } from './dataloaderContext'
import { User } from '../users'

export interface Context {
  dataloaders?: Dataloaders
  database?: Database
  ip?: string | string[]
  currentUserId?: string
  returnCurrentUser?: () => Promise<User>
}
