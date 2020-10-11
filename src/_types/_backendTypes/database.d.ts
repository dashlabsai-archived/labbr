import { Collection } from 'mongodb'

import User from '../users'
import EventRegistration from '../eventRegistration'

export interface Database {
  eventRegistrations: Collection<EventRegistration>
  users: Collection<User>
}