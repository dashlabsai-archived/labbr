import { Context } from '../../../../_types/_backendTypes/context'
import { ForbiddenError } from 'apollo-server'
import { ObjectId } from 'mongodb'

import { EventRegistration, EventRegistrationArgs } from '../../../../_types/eventRegistration'

export default async (
  _root: undefined,
  args: EventRegistrationArgs,
  context: Context
): Promise<EventRegistration> => {
  const currentUser = await context.returnCurrentUser()

  if (!currentUser) {
    throw new ForbiddenError('Forbidden')
  }

  return await context.database.eventRegistrations.findOne({
    _id: new ObjectId(args._id),
    deleted: { $ne: true }
  })
}