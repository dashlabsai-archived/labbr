import * as jwt from 'jwt-simple'
import { User } from '../../_types/users'

export const encode = (user: User): string => {
  return jwt.encode({ _id: user._id }, process.env.SECRET)
}
