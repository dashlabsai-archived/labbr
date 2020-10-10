import { Collection } from 'mongodb'

import User from '../users'

export interface Database {
  users: Collection<User>
}