import { NextPage } from 'next'
import home from 'frontend/layouts/home'
import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'

import PaperContainer from 'frontend/components/_common/PaperContainer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const RootPage: NextPage = (): ReactElement => {
  const router = useRouter()

  return (
    <PaperContainer
      content={
        <List
          dense
        >
          <ListItem
            button
            onClick={(): void => { router.push('/home/Mydashboard') }}
          >
            <ListItemText
              primary={'Sign in'}
            />
          </ListItem>
          <ListItem
            button
            onClick={(): void => { router.push('/users/create') }}
          >
            <ListItemText
              primary={'Create account'}
            />
          </ListItem>
          <ListItem
            button
            onClick={(): void => { router.push('/users') }}
          >
            <ListItemText
              primary={'Forgot password'}
            />
          </ListItem>
        </List>
      }
    />
  )
}

export default home(RootPage)
