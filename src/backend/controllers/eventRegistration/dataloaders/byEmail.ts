import { DataloaderContext } from '../../../../_types/_backendTypes/dataloaderContext'
import { EventRegistration } from '../../../../_types/eventRegistration'

export default async (
  dataloaderContext: DataloaderContext,
  emails: string[]
): Promise<EventRegistration[]> => {
  const eventRegistrations: EventRegistration[] = await dataloaderContext.database.eventRegistrations
  .find({
    email: { $in: emails },
    deleted: { $ne: true }
  })
  .toArray()

  const eventRegistrationsByEmail: {
    [email: string]: EventRegistration
  } = {}

  eventRegistrations.forEach((eventRegistration: EventRegistration) => {
    eventRegistrationsByEmail[eventRegistration.email] = eventRegistration
  })

  return emails.map((email: string): EventRegistration => eventRegistrationsByEmail[email])
}