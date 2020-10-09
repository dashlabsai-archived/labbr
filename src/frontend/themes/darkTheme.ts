import { createMuiTheme } from '@material-ui/core'
import red from '@material-ui/core/colors/red'

export default createMuiTheme({
  palette: {
    background: {
      paper: '#212121',
      default: '#333333'
    },
    type: 'dark',
    primary: { main: '#212121' },
    secondary: { main: '#002365' },
    error: red
  }
})
