import { Context } from '../../../../_types/_backendTypes/context'
import { ForbiddenError } from 'apollo-server'

import { EventRegistration } from '../../../../_types/eventRegistration'

export default async (
  _root: undefined,
  args: undefined,
  context: Context
): Promise<EventRegistration[]> => {
  const currentUser = await context.returnCurrentUser()

  if (!currentUser) {
    throw new ForbiddenError('Forbidden')
  }

  return await context.database.eventRegistrations.find().toArray()
}