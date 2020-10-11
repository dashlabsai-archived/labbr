//eslint-disable-next-line
const globalAny: any = global
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardContainer from 'frontend/components/_common/CardContainer'
import React, { ReactElement, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import mutation from './mutation'
import { CreateEventRegistrationArgs } from '_types/eventRegistration'

import { useMutation } from '@apollo/react-hooks'

const LabList = (): ReactElement => {

  const [email, setEmail] = useState<string>('')

  const createVariables: CreateEventRegistrationArgs = {
    email
  }

  const [create, mutationState] = useMutation(mutation, {
    variables: createVariables,
    onCompleted: (): void => {
      globalAny.setNotification('success', 'Booking Completed, Have a Great Day!')
    },
    onError: (error): void => {
      globalAny.setNotification('error', error.graphQLErrors.map(e => e.message).join(''))
    }
  })

    return (
      <>
        <CardContainer
          title='Laboratory 1'
          content={
            <>
              <Typography>Test here. It is 3 miles from the event location.</Typography>
              <p/>
              <Typography>Input your email to confirm the booking and receive the next steps to take.</Typography>
              <TextField
                size={'small'}
                variant={'outlined'}
                fullWidth
                margin={'dense'}
                label={'Email'}
                value={email}
                onChange={(e): void => {
                  setEmail(e.target.value)
                }}
              />
            </>
          }
          actions={
            <Button
            variant={'outlined'}
            onClick={(): void => {
              create()
            }}
            disabled={mutationState.loading || email === '' }
            color={'primary'}
          >
                Book an Appointment
            </Button>
          }
        />
      </>
    )
}
export default LabList