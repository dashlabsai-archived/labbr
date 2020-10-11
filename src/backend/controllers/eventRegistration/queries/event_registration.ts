import { Context } from '../../../../_types/_backendTypes/context'
import { ObjectId } from 'mongodb'

import { EventRegistration, EventRegistrationArgs } from '../../../../_types/eventRegistration'

export default async (
  _root: undefined,
  args: EventRegistrationArgs,
  context: Context
): Promise<EventRegistration> => {
  return await context.database.eventRegistrations.findOne({
    _id: new ObjectId(args._id),
    deleted: { $ne: true }
  })
}