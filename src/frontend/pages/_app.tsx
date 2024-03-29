//eslint-disable-next-line
const globalAny: any = global

import React, { ReactElement } from 'react'

import App from 'next/app'
import Head from 'next/head'

import ThemeProvider from '@material-ui/styles/ThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

import darkTheme from 'frontend/themes/darkTheme'
import theme from 'frontend/themes/theme'

import { ApolloProvider } from '@apollo/react-hooks'
import client from 'frontend/apollo/client'
import Notification from 'frontend/components/_common/Notification'


declare global {
  namespace NodeJs {
    interface Global {
      toggleDarkTheme: VoidFunction
      darkTheme: boolean
      setNotification: (type: string, message: string) => void
    }
  }
}

class MyApp extends App {
  state = {
    darkTheme: false
  }

  render(): ReactElement {
    const { Component, pageProps } = this.props

    globalAny.toggleDarkTheme = (): void => {
      if (process.browser) {
        window.localStorage.setItem(
          'enableDarkTheme',
          window.localStorage.enableDarkTheme === 'true' ? 'false' : 'true'
        )
      }
      this.setState({ darkTheme: !this.state.darkTheme })
      globalAny.darkTheme = !this.state.darkTheme
    }

    return (
      <>
        <Head>
          <title>{'labbr'}</title>
          <meta name={'viewport'} content={'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'} />
        </Head>
        <ThemeProvider theme={globalAny.darkTheme ? darkTheme : theme}>
          <CssBaseline />
          <ApolloProvider client={client}>
            <Component {...pageProps} />
            <Notification />
          </ApolloProvider>
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
