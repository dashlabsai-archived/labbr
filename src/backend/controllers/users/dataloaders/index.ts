import { DataloaderContext } from '../../../../_types/_backendTypes/dataloaderContext'
import { User } from '../../../../_types/users'
import { ObjectId } from 'mongodb'
import Dataloader from 'dataloader'

import byId from './byId'
import byEmail from './byEmail'

export interface UserDataloaders {
  byId: Dataloader<ObjectId, User, ObjectId[]>
  byEmail: Dataloader<string, User, ObjectId[]>
}

export default (dataloaderContext: DataloaderContext): UserDataloaders => ({
  byId: new Dataloader(
    (ids: ObjectId[]): Promise<User[]> => byId(dataloaderContext, ids)
  ),
  byEmail: new Dataloader(
    (emails: string[]): Promise<User[]> => byEmail(dataloaderContext, emails)
  )
})