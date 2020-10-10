import { ObjectId } from 'mongodb'
import * as jwt from 'jwt-simple'
import { User } from '../../_types/users'
import { Database } from '../../_types/_backendTypes/database'

export default async (
  // eslint-disable-next-line
  headers: any,
  database: Database
): Promise<User | null> => {
  if (!headers.accesstoken) {
    return null
  }

  try {
    const decoded = jwt.decode(headers.accesstoken, process.env.SECRET)

    if (!decoded) {
      return null
    }

    const currentUser: User = await database.users.findOne({
      _id: new ObjectId(decoded._id)
    })

    return currentUser
  } catch {
    return null
  }
}