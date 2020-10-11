import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import home from 'frontend/layouts/home'
import UsersCreate from 'frontend/components/users/Create'

import PaperContainer from 'frontend/components/_common/PaperContainer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ListItemIcon } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

import { useRouter } from 'next/router'

const UsersCreatePage: NextPage = (): ReactElement => {
  const router = useRouter()
  return (
  <>
  <UsersCreate />
  <PaperContainer
      content={
        <List
          dense
        >
          <ListItem
            button
            onClick={(): void => { router.push('/users') }}
          >
            <ListItemIcon>
              <AccountCircle/>
            </ListItemIcon>
            <ListItemText
              primary={'Already Have An Account?'}
            />
          </ListItem>
        </List>
      }
    />
  </>
  )
}

export default home(UsersCreatePage)