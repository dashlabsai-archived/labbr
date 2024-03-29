import { UserInputError } from 'apollo-server'
import { Context } from '../../../../_types/_backendTypes/context'
import { User, SignInUserArgs } from '../../../../_types/users'
import * as bcrypt from 'bcrypt'

export default async (
  _root: undefined,
  args: SignInUserArgs,
  context: Context
): Promise<User> => {
  const { email, password } = args

  const user = await context.database.users.findOne({
    email: email.trim().toLowerCase()
  })

  if (!user) {
    throw new UserInputError('Invalid email')
  }

  const passwordCorrect = await bcrypt.compare(password, user.password)

  if (!passwordCorrect) {
    throw new UserInputError('Invalid password')
  }

  return user
}