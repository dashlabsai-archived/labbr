import { makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'
import { Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import AppBar from 'frontend/layouts/moduleViewer/AppBar'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.spacing(64),
    margin: 'auto'
  },
  padding: {
    padding: theme.spacing(2)
  }
}))

const Home: NextPage = (): ReactElement => {
  const classes = useStyles()

  return (
    <>
      {/*TO-DO (MIGUEL) > ADD THE AUTHENTICATED LAYOUT SO APPBAR CAN BE PASSED INSTEAD*/}
      <AppBar title='labbr' />
      <Typography color={'textPrimary'} variant={'h4'} className={classes.padding}>
        {'Hello, World!'}
      </Typography>
    </>
  )
}

export default Home
