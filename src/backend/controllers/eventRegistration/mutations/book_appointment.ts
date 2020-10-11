import { Context } from '../../../../_types/_backendTypes/context'
import { EventRegistration, CreateEventRegistrationArgs } from '../../../../_types/eventRegistration'
import { UserInputError } from 'apollo-server'
import createParticipant from '../../../_utils/mail/createParticipant'

export default async (
  _root: undefined,
  args: CreateEventRegistrationArgs,
  context: Context
): Promise<EventRegistration> => {
  const { email, firstName, lastName } = args

  await createParticipant(
    firstName,
    lastName,
    email.toLocaleLowerCase().trim()
  )
  return await context.database.eventRegistrations.findOne({
    email,
    deleted: { $ne: true }
  })
}