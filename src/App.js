import React from 'react'
import Routes from './routes'
import AppBar from './components/appbar/AppBar'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
})

function App () {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Routes />
    </ThemeProvider>
  )
}

export default App
