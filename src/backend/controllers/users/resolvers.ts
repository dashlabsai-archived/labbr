import { User } from '../../../_types/users'

export default {
  User: {
    password: (): string => '',
    name: async (user: User): Promise<string> => {
      return `${user.firstName} ${user.lastName}`
    }
  }
}