import { Context } from '../../../../_types/_backendTypes/context'
import { ForbiddenError } from 'apollo-server'
import { ObjectId } from 'mongodb'

import { User, UserArgs } from '../../../../_types/users'

export default async (
  _root: undefined,
  args: UserArgs,
  context: Context
): Promise<User> => {
  const currentUser = await context.returnCurrentUser()

  if (!currentUser) {
    throw new ForbiddenError('Forbidden')
  }

  return await context.database.users.findOne({
    _id: new ObjectId(args._id),
    deleted: { $ne: true }
  })
}