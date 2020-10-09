import React, { ReactElement } from 'react'
import { NextPage } from 'next'

import PageTitle from 'frontend/components/_common/PageTitle'

const UserPage: NextPage = (): ReactElement => {
  return (
    <>
      <PageTitle title={'User'} />
    </>
  )
}

export default UserPage
