import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import home from 'frontend/layouts/home'
import PatientsVerifyCertificate from 'frontend/components/results'

const VerifyResults: NextPage = (): ReactElement => {
  return <PatientsVerifyCertificate />
}

export default home(VerifyResults)
