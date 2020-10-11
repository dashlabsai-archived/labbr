import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardContainer from 'frontend/components/_common/CardContainer'
import React, { ReactElement } from 'react'
const LabList = (): ReactElement => {

    return (
      <>
        <CardContainer
          title='Laboratory 1'
          content={
            <>
              <Typography>Test here. It is 3 miles from the event location.</Typography>
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