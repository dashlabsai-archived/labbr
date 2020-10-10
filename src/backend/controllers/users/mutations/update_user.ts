import { ForbiddenError } from 'apollo-server'
import { ObjectId } from 'mongodb'
import { User, UpdateUserArgs } from '../../../../_types/users'

export default async (
  _root: undefined,
  args: UpdateUserArgs,
  context: Context
): Promise<User> => {
  const currentUser: User = await context.returnCurrentUser()

  if (String(currentUser._id) === args._id) {
    throw new ForbiddenError('Forbidden')
  }

  const { _id, firstName, lastName } = args

  const updateObject: User = {}

  if (firstName) {
    updateObject.firstName = firstName
  }

  if (lastName) {
    updateObject.lastName = lastName
  }

  const res = await context.database.users.findOneAndUpdate(
    { _id: new ObjectId(_id) },
    {
      $set: {
        ...updateObject,
        updatedAt: new Date(),
        updatedById: new ObjectId(currentUser._id)
      }
    },
    { returnOriginal: false }
  )

  const user: User = res.value
  return user
}
