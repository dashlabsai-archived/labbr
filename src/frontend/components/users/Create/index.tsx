//eslint-disable-next-line
const globalAny: any = global
import Button from '@material-ui/core/Button'
import CardContainer from 'frontend/components/_common/CardContainer'
import React, { ReactElement, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import mutation from './mutation'
import { useMutation } from '@apollo/react-hooks'
import { CreateUserArgs } from '_types/users'
import { useRouter } from 'next/router'

const UsersCreate = (): ReactElement => {

  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const createVariables: CreateUserArgs = {
    email,
    firstName,
    lastName,
    password
  }

  const [create, mutationState] = useMutation(mutation, {
    variables: createVariables,
    onCompleted: (): void => {
      globalAny.setNotification('success', 'User created')
    },
    onError: (error): void => {
      console.log('error', error.graphQLErrors.map((e) => e.message).join(''))
    }
  })

  return (
    <>
      <CardContainer
          title={'Create account'}
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
              <TextField
                size={'small'}
                type={'password'}
                variant={'outlined'}
                fullWidth
                margin={'dense'}
                label={'Password'}
                value={password}
                onChange={(e): void => {
                  setPassword(e.target.value)
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
                disabled={mutationState.loading || firstName === '' || lastName === '' || email === '' || password === ''}
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
        </>
  )
}

export default UsersCreate