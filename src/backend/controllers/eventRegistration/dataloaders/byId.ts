import { DataloaderContext } from '../../../../_types/_backendTypes/dataloaderContext'
import { EventRegistration } from '../../../../_types/eventRegistration'
import { ObjectId } from 'mongodb'

export default async (
  dataloaderContext: DataloaderContext,
  ids: ObjectId[]
): Promise<EventRegistration[]> => {
  const eventRegistrations: EventRegistration[] = await dataloaderContext.database.eventRegistrations
  .find({
    _id: { $in: ids.map((id: ObjectId): ObjectId => new ObjectId(id)) },
    deleted: { $ne: true }
  })
  .toArray()

  const eventRegistrationsById: { [_id: string]: EventRegistration } = {}

  eventRegistrations.forEach((eventRegistration: EventRegistration): void => {
    eventRegistrationsById[String(eventRegistration._id)] = eventRegistration
  })

  return ids.map((id: ObjectId): EventRegistration => eventRegistrationsById[String(id)])
}