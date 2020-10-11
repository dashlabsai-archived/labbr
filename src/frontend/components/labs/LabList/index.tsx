import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardContainer from 'frontend/components/_common/CardContainer'
import React, { ReactElement, useState } from 'react'
import TextField from '@material-ui/core/TextField'
const LabList = (): ReactElement => {

  const [email, setEmail] = useState<string>('')

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
              color="primary"
              onClick={(): void =>{
                console.log('ive been clicked')
              }}
            >
                Book an Appointment
            </Button>
          }
        />
      </>
    )
}
export default LabList