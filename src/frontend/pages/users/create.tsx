import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import home from 'frontend/layouts/home'
import UsersCreate from 'frontend/components/users/Create'

const UsersCreatePage: NextPage = (): ReactElement => {
  return <UsersCreate />
}

export default home(UsersCreatePage)