import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import home from 'frontend/layouts/home'
import Dashboard from 'frontend/components/organizations/Dashboard'

const UsersCreatePage: NextPage = (): ReactElement => {
  return <Dashboard />
}

export default home(UsersCreatePage)