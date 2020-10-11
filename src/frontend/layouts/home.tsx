//eslint-disable-next-line
const global: any = global

import React, { ReactElement, FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'

import grey from '@material-ui/core/colors/grey'
import indigo from '@material-ui/core/colors/indigo'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  background: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'fixed',
    backgroundImage: global.darkTheme
      ? `linear-gradient(${grey[900]}, ${grey[800]})`
      : `linear-gradient(${indigo[900]}, ${indigo[700]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    zIndex: -1
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
    minHeight: '100vh',
    paddingTop: theme.spacing(4),
    maxWidth: theme.spacing(64),
    margin: 'auto'
  },
  links: {
    color: 'white',
    textAlign: 'center'
  },
  link: {
    color: 'white'
  },
  logo: {
    height: theme.spacing(12.5),
    marginBottom: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  },
  tagline: {
    color: 'white',
    marginBottom: theme.spacing(3)
  },
  content: {
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    margin: 'auto'
  }
}))

const home = (Page: FunctionComponent) => (): FunctionComponent | NextPage | ReactElement => {
  const classes = useStyles({})

  return (
    <>
      <div className={classes.background} />
      <div className={classes.root}>
        <div>
          <img alt={'labbr'} src={'/static/dbl_logo_white.svg'} className={classes.logo} />
          <Typography variant={'h3'} align={'center'} className={classes.tagline}>
            {'labbr'}
          </Typography>
          <div className={classes.content}>
            <Page />
            <p className={classes.links}>
              <a className={classes.link} target='_blank' rel='noreferrer' href="#">Privacy Policy</a>&nbsp;|&nbsp;
              <a className={classes.link} target='_blank' rel='noreferrer' href="#">Terms of Service</a>&nbsp;|&nbsp;
              <a className={classes.link} target='_blank' rel='noreferrer' href="#">System Status</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default home
