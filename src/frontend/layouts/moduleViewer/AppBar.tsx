//eslint-disable-next-line
const globalAny: any = global
import { makeStyles } from '@material-ui/core/styles'
import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import IconButton from '@material-ui/core/IconButton'
import { AppBar, Toolbar } from '@material-ui/core'
import ArrowLeftIcon from '@material-ui/icons/ArrowBackIos'
import Typography from '@material-ui/core/Typography'
import Brightness4Icon from '@material-ui/icons/Brightness3'
import Brightness5Icon from '@material-ui/icons/Brightness4'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default ({ title, backRoute }: { title: string; backRoute?: string }): ReactElement => {
  const classes = useStyles({})
  const router = useRouter()

  return (
    <AppBar position={'static'}>
      <Toolbar>
        {backRoute && (
          <IconButton
            className={classes.menuButton}
            edge={'start'}
            color={'inherit'}
            onClick={(): void => {
              router.push(backRoute)
            }}
          >
            <ArrowLeftIcon />
          </IconButton>
        )}
        <Typography className={classes.title} variant={'h6'}>
          {title}
        </Typography>
        <IconButton
          onClick={(): void => { globalAny.toggleDarkTheme() }}
          color={'inherit'}
        >
          {globalAny.darkTheme ? <Brightness5Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
