import { makeStyles, styled } from '@material-ui/core/styles'
import { NextPage } from 'next'
import { Typography } from '@material-ui/core'
import AppBar from 'frontend/layouts/moduleViewer/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React, { ReactElement } from 'react'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.spacing(64),
    margin: 'auto'
  },
  padding: {
    padding: theme.spacing(2)
  }
}))
const LabList = (): ReactElement => {
    return (
      <>
        <AppBar title='labbr' />
        <Box clone pt={2} pr={1} pb={1} pl={2}>
          <Paper elevation={0}>
            <Grid container spacing={2} alignItems="center" wrap="nowrap">
              <Grid item>
                <Box bgcolor="primary.main" clone>
                </Box>
              </Grid>
              <Grid item>
                <Typography><h4>Lab 1</h4></Typography>
                <Typography>Test here. It is 3 miles from the event location.</Typography>
              </Grid>
            </Grid>
            <Grid container justify="flex-end" spacing={1}>
              <Grid item>
                <Button color="primary">Book an Appointment</Button>
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={0}>
            <Grid container spacing={2} alignItems="center" wrap="nowrap">
              <Grid item>
                <Box bgcolor="primary.main" clone>
                </Box>
              </Grid>
              <Grid item>
                <Typography><h4>Lab 2</h4></Typography>
                <Typography>Test here. It is 6 miles from the event location.</Typography>
              </Grid>
            </Grid>
            <Grid container justify="flex-end" spacing={1}>
              <Grid item>
                <Button color="primary">Book an Appointment</Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </>
    )
}
export default LabList