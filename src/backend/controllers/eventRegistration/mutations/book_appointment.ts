import { Context } from '../../../../_types/_backendTypes/context'
import { EventRegistration, CreateEventRegistrationArgs } from '../../../../_types/eventRegistration'

import createResult from '../../../_utils/mail/createResult'

export default async (
  _root: undefined,
  args: CreateEventRegistrationArgs,
  context: Context
): Promise<EventRegistration> => {
  const { email } = args

  await createResult(
    email
  )

  return await context.database.eventRegistrations.findOne({
    email,
    deleted: { $ne: true }
  })
}