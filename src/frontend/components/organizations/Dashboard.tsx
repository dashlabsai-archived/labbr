import React, { ReactElement } from 'react'
import { ResponsiveContainer, BarChart, Bar, Legend, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { AddCircleOutline , RemoveCircleOutline } from '@material-ui/icons'
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator'
import CardContainer from 'frontend/components/_common/CardContainer'

import Grid from '@material-ui/core/Grid'
import PaperContainer from '../_common/PaperContainer'

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '1em'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
)

const Dashboard = (): ReactElement => {
  const classes = useStyles()

  const customNameConfig: Config = {
    dictionaries: [adjectives, colors],
    separator: ' ',
    length: 2
  }

  const data = [
    {
      name: 'Oct 7', negative: getRandomInt(1000,5000), positive: getRandomInt(100,500)
    },
    {
      name: 'Oct 8', negative: getRandomInt(1000,5000), positive: getRandomInt(100,500)
    },
    {
      name: 'Oct 9', negative: getRandomInt(1000,5000), positive: getRandomInt(100,500)
    },
    {
      name: 'Oct 10', negative: getRandomInt(1000,5000), positive: getRandomInt(100,500)
    },
    {
      name: 'Oct 12', negative: getRandomInt(1000,5000), positive: getRandomInt(100,500)
    }
  ]

    const names = []
    for (let i = 0; i < 6; i++ ) {
      names.push(
      <ListItem>
          <ListItemIcon>
            {Math.random() < 0.5 ? <AddCircleOutline />: <RemoveCircleOutline /> }
          </ListItemIcon>
          <ListItemText
            primary={uniqueNamesGenerator(customNameConfig)}
          >
          </ListItemText>
        </ListItem>
      )
    }

  return (
      <div className={classes.root}>
      <Grid
          container spacing={3}
          justify="center"
          alignItems="center">
        <Grid item xs={5}>
        <CardContainer
          title = {'Registrations per day'}
          content = {
            <>
              <ResponsiveContainer width={'100%'} height={300}>

                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="negative" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </>
          }
        />
        </Grid>
        <Grid item xs={5}>
        <CardContainer
          title = {'People Tested per day'}
          content = {
            <>
              <ResponsiveContainer width={'100%'} height={300}>

                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="positive" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </>
          }
        />
        </Grid>
        <Grid item xs={5}>
        <CardContainer
          title = {'Result Distribution'}
          content = {
            <>
              <ResponsiveContainer width={'100%'} height={300}>

              <BarChart
                data={data}
                margin={{
                  top: 20, right: 50, left: 50, bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="negative" stackId="a" fill="#82ca9d" />
                <Bar dataKey="positive" stackId="a" fill="#8884d8" />
              </BarChart>
              </ResponsiveContainer>
            </>
          }
        />
        </Grid>
        <Grid item xs={5}>
          <CardContainer
            title = {'Participants Results'}
            content = {
              <>
                <List
                >
                  {names}

                </List>
              </>
            }
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard