import { ObjectId } from 'mongodb'

export interface User {
  _id?: ObjectId
  email?: string
  name?: string
  firstName?: string
  lastName?: string
  password?: string
  createdAt?: Date
  deletedAt?: Date
  updatedAt?: Date
  deleted?: boolean
}

export interface UserArgs {
  _id: string
}

export interface CreateUserArgs {
  email?: string
  firstName?: string
  lastName?: string
  password?: string
}

export interface UpdateUserArgs {
  _id?: string
  firstName?: string
  lastName?: string
}

export interface SignInUserArgs {
  email: string
  password: string
}

export interface DeleteUserArgs {
  _id: string
}