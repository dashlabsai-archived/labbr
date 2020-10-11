import { ObjectId } from 'mongodb'

export interface EventRegistration {
  _id?: ObjectId
  email?: string
  name?: string
  firstName?: string
  lastName?: string
  createdAt?: Date
  deletedAt?: Date
  updatedAt?: Date
  deleted?: boolean
}

export interface EventRegistrationArgs {
  _id: string
}

export interface CreateEventRegistrationArgs {
  email?: string
  firstName?: string
  lastName?: string
}

export interface UpdateEventRegistrationArgs {
  _id?: string
  firstName?: string
  lastName?: string
}

export interface DeleteEventRegistrationArgs {
  _id: string
}