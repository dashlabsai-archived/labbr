import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import home from 'frontend/layouts/home'
import LabList from 'frontend/components/labs/LabList'

const LabListPage: NextPage = (): ReactElement => {
  return <LabList/>
}

export default home(LabListPage)