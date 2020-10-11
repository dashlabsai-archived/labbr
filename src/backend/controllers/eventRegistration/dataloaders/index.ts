import { DataloaderContext } from '../../../../_types/_backendTypes/dataloaderContext'
import { EventRegistration } from '../../../../_types/eventRegistration'
import { ObjectId } from 'mongodb'
import Dataloader from 'dataloader'

import byId from './byId'
import byEmail from './byEmail'

export interface EventRegistrationDataloaders {
  byId: Dataloader<ObjectId, EventRegistration, ObjectId[]>
  byEmail: Dataloader<string, EventRegistration, ObjectId[]>
}

export default (dataloaderContext: DataloaderContext): EventRegistrationDataloaders => ({
  byId: new Dataloader(
    (ids: ObjectId[]): Promise<EventRegistration[]> => byId(dataloaderContext, ids)
  ),
  byEmail: new Dataloader(
    (emails: string[]): Promise<EventRegistration[]> => byEmail(dataloaderContext, emails)
  )
})