import { useLazyQuery } from '@apollo/react-hooks'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import Button from '@material-ui/core/Button'
import CardContainer from 'frontend/components/_common/CardContainer'
import Collapse from '@material-ui/core/Collapse'
import query from './query'
import React, { ReactElement, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'


const PatientsTrackStatus = (): ReactElement => {

  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [searchedEmail, setSearchedEmail] = useState<string>('')

  const [loadResult, { loading, data }] = useLazyQuery(query, {
    onCompleted: (): void => {
      setSearchedEmail(email)
    },
    fetchPolicy: 'network-only'
  })


  const name = `${lastName}, ${firstName}`

  return (
    <CardContainer
      loading={loading}
      title={'Verify Results'}
      content={
        <>
          <Collapse in={Boolean(searchedEmail)}>
          <Typography variant={'h6'} gutterBottom>
            {name}
          </Typography>
          <Alert variant={'filled'} severity={'success'}>
            <AlertTitle>{'NEGATIVE'}</AlertTitle>
          </Alert>
          <Typography>
            We verify that <b>{name}</b> has been tested for COVID-19 by the Laboratory{' '}
            is marked as <b>{'NEGATIVE'}</b>.
          </Typography>
          </Collapse>
          <Collapse in={Boolean(!searchedEmail)}>
          <TextField
            fullWidth
            margin={'dense'}
            disabled={loading}
            variant={'outlined'}
            label={'First Name'}
            placeholder={'First Name'}
            onChange={(e): void => {
              setFirstName(e.target.value)
            }}
            value={firstName}
          />
            <TextField
            fullWidth
            margin={'dense'}
            disabled={loading}
            variant={'outlined'}
            label={'Last Name'}
            placeholder={'Last Name'}
            onChange={(e): void => {
              setLastName(e.target.value)
            }}
            value={lastName}
          />
          <TextField
            fullWidth
            margin={'dense'}
            disabled={loading}
            variant={'outlined'}
            label={'Email'}
            placeholder={'Email'}
            onChange={(e): void => {
              setEmail(e.target.value)
            }}
            value={email}
          />
          </Collapse>
        </>
      }
      actions={
        <>
          <Button
            id={'trackPatient'}
            disabled={loading || email === ''}
            variant={'contained'}
            color={'primary'}
            onClick={(): void => {
              setSearchedEmail
              loadResult({
                variables: {
                  email,
                  firstName,
                  lastName
                }
              })
            }}
          >
            {'Verify patient'}
          </Button>
        </>
      }
    />
  )
}

export default PatientsTrackStatus
