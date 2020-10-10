import { Database } from './database'
import { Dataloaders } from './dataloaderContext'
import { User } from '../users'
import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core'

export interface Context {
  dataloaders?: Dataloaders
  database?: Database
  em: EntityManager<IDatabaseDriver<Connection>>
  ip?: string | string[]
  currentUserId?: string
  returnCurrentUser?: () => Promise<User>
}
