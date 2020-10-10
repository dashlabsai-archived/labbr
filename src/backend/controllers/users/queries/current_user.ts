import { Context } from '../../../../_types/_backendTypes/context'
import { User } from '../../../../_types/users'

export default async (
  _root: undefined,
  _args: undefined,
  context: Context
): Promise<User> => {
  return await context.returnCurrentUser()
}