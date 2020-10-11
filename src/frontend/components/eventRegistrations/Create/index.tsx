//eslint-disable-next-line
const globalAny: any = global
import Button from '@material-ui/core/Button'
import CardContainer from 'frontend/components/_common/CardContainer'
import PaperContainer from 'frontend/components/_common/PaperContainer'
import React, { ReactElement, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import mutation from './mutation'
import { useMutation } from '@apollo/react-hooks'
import { CreateEventRegistrationArgs } from '_types/eventRegistration'
import { useRouter } from 'next/router'

const UsersCreate = (): ReactElement => {

  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  const createVariables: CreateEventRegistrationArgs = {
    email,
    firstName,
    lastName
  }

  const [create, mutationState] = useMutation(mutation, {
    variables: createVariables,
    onCompleted: (): void => {
      globalAny.setNotification('success', 'Registration created')
    },
    onError: (error): void => {
      globalAny.setNotification('error', error.graphQLErrors.map(e => e.message).join(''))
    }
  })

  return (
    <>
      <CardContainer
          title={'Register to Game of Code 6'}
          loading={mutationState.loading}
          content={
            <>
              <TextField
                size={'small'}
                variant={'outlined'}
                fullWidth
                margin={'dense'}
                label={'First name'}
                value={firstName}
                onChange={(e): void => {
                  setFirstName(e.target.value)
                }}
              />
              <TextField
                size={'small'}
                variant={'outlined'}
                fullWidth
                margin={'dense'}
                label={'Last Name'}
                value={lastName}
                onChange={(e): void => {
                  setLastName(e.target.value)
                }}
              />
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
            <>
              <Button
                variant={'outlined'}
                onClick={(): void => {
                  create()
                }}
                disabled={mutationState.loading || firstName === '' || lastName === '' || email === '' }
                color={'primary'}
              >
                {'Submit'}
              </Button>
              <Button
                onClick={(): void => { router.back() }}
              >
                {'Back'}
              </Button>
            </>
          }
        />
        <PaperContainer
          content = {
            <p>
              <Typography variant="body2" color="primary">
              Please check your promotions, junk or spam folder in case you did not get an email. <br/>
              If you still did not receive an email, click <a href="https://labbr.app/labs" target="__blank"> Here </a>
              </Typography>
            </p>
          }
        />

        </>
  )
}

export default UsersCreate