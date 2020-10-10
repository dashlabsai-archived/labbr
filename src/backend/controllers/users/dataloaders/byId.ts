import { DataloaderContext } from '../../../../_types/_backendTypes/dataloaderContext'
import { User } from '../../../../_types/users'
import { ObjectId } from 'mongodb'

export default async (
  dataloaderContext: DataloaderContext,
  ids: ObjectId[]
): Promise<User[]> => {
  const users: User[] = await dataloaderContext.database.users
  .find({
    _id: { $in: ids.map((id: ObjectId): ObjectId => new ObjectId(id)) },
    deleted: { $ne: true }
  })
  .toArray()

  const usersById: { [_id: string]: User } = {}

  users.forEach((user: User): void => {
    usersById[String(user._id)] = user
  })

  return ids.map((id: ObjectId): User => usersById[String(id)])
}