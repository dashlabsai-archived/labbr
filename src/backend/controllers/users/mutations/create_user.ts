import { Context } from '../../../../_types/_backendTypes/context'
import { User, CreateUserArgs } from '../../../../_types/users'
import { ObjectId } from 'mongodb'
import * as bcrypt from 'bcrypt'
import { UserEntity } from '../../../entities/UserEntity'

//const base_url = 'labbr.app'

export default async (
  _root: undefined,
  args: CreateUserArgs,
  context: Context
): Promise<User> => {
  const { email, firstName, lastName, password } = args

  const existingUser = await context.em.getRepository(UserEntity).findOne({
    email: email.toLowerCase().trim()
  })

  if (existingUser) {
    await context.em.getRepository(UserEntity).remove({
      _id: new ObjectId(existingUser._id)
    })
  }

  const salt = await bcrypt.genSalt(10)

  const hash = await bcrypt.hash(password, salt)

  const res = await context.em.getRepository(UserEntity).persist({
    email: email.toLowerCase().trim(),
    firstName,
    lastName,
    password: hash,
    createdAt: new Date()
  })

  const user: User = res

  console.log(user)

  return user
}