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

  const existingRegistration = await context.database.eventRegistrations.findOne({
    email: email.toLocaleLowerCase().trim()
  })

  if (existingRegistration) {
    throw new UserInputError('Email already registered')
  }

  const res = await context.database.eventRegistrations.insertOne({
    email: email.toLowerCase().trim(),
    firstName,
    lastName,
    createdAt: new Date()
})

  const eventRegistration: EventRegistration = res.ops[0]

  await createParticipant(
    firstName,
    lastName,
    email.toLocaleLowerCase().trim()
  )

  return eventRegistration
}