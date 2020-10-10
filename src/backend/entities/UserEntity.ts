import { Entity, Property, PrimaryKey } from '@mikro-orm/core'
import { ObjectId } from '@mikro-orm/mongodb'
import { BaseEntity } from './BaseEntity'

@Entity()
export class UserEntity extends BaseEntity {

  @PrimaryKey()
  _id!: ObjectId

  @Property()
  createdAt = new Date()

  @Property( { onUpdate: () => new Date() } )
  updatedAt = new Date()

  @Property( { onUpdate: () => new Date() } )
  deletedAt = new Date()

  @Property()
  name: string

  @Property()
  firstName!: string

  @Property()
  lastName!: string

  @Property()
  email?: string

  @Property()
  password?: string

  @Property()
  deleted: boolean

}