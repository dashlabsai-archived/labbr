import { UserDataloaders } from '../../backend/controllers/users/dataloaders'
import { EventRegistrationDataloaders } from '../../backend/controllers/eventRegistration/dataloaders'

export interface Dataloaders {
  eventRegistrations: EventRegistrationDataloaders,
  users: UserDataloaders
}