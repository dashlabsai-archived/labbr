import { DataloaderContext } from '../../../../_types/_backendTypes/dataloaderContext'
import { User } from '../../../../_types/users'

export default async (
  dataloaderContext: DataloaderContext,
  emails: string[]
): Promise<User[]> => {
  const users: User[] = await dataloaderContext.databse.users
  .find({
    email: { $in: emails },
    deleted: { $ne: true }
  })
  .toArray()

  const usersByEmail: {
    [email: string]: User
  } = {}

  users.forEach((user: User) => {
    usersByEmail[user.email] = user
  })

  return emails.map((email: string): User => usersByEmail[email])
}