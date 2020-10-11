import React, { ReactElement } from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import yellow from '@material-ui/core/colors/yellow'
import red from '@material-ui/core/colors/red'
import CardContainer from 'frontend/components/_common/CardContainer'

import Grid from '@material-ui/core/Grid'

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

  const data = [
    {
      name: 'Oct 7', uv: 4000, pv: 2400, amt: 2400
    },
    {
      name: 'Oct 8', uv: 3000, pv: 1398, amt: 2210
    },
    {
      name: 'Oct 9', uv: 2000, pv: 9800, amt: 2290
    },
    {
      name: 'Oct 10', uv: 2780, pv: 3908, amt: 2000
    }
  ]


  return (
      <div className={classes.root}>
      <Grid
          container spacing={3}
          justify="center"
          alignItems="center">
        <Grid item xs={10}>
        <CardContainer
          title = {'Registrations per day'}
          content = {
            <>
              <ResponsiveContainer width={'100%'} height={500}>

                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
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
      </Grid>
    </div>
  )
}

export default Dashboard