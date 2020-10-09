import React, { ReactElement } from 'react'
import { NextPage } from 'next'

import PageTitle from 'frontend/components/_common/PageTitle'

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <PageTitle title={'Home'} />
    </>
  )
}

export default Home
