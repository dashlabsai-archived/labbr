import { EventRegistration } from '../../../_types/eventRegistration'

export default {
  EventRegistration: {
    name: async (eventRegistration: EventRegistration): Promise<string> => {
      return `${eventRegistration.firstName} ${eventRegistration.lastName}`
    }
  }
}