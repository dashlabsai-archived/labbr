import { NextPage } from 'next'
import home from 'frontend/layouts/home'
import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'

import PaperContainer from 'frontend/components/_common/PaperContainer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ListItemIcon } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import PeopleIcon from '@material-ui/icons/People'

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
            onClick={(): void => { router.push('/eventRegistration') }}
          >
            <ListItemIcon>
              <AccountCircle/>
            </ListItemIcon>
            <ListItemText
              primary={'Participant'}
            />
          </ListItem>
          <ListItem
            button
            onClick={(): void => { router.push('/users') }}
          >
          <ListItemIcon>
            <PeopleIcon/>
          </ListItemIcon>
            <ListItemText
              primary={'Organizer'}
            />
          </ListItem>
        </List>
      }
    />
  )
}

export default home(RootPage)
