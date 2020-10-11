import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import home from 'frontend/layouts/home'
import EventRegistrationCreate from 'frontend/components/eventRegistrations/Create'


const EventRegistrationCreatePage: NextPage = (): ReactElement => {
  return (
  <>
  <EventRegistrationCreate />
  </>
  )
}

export default home(EventRegistrationCreatePage)