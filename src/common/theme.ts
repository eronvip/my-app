import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    background: {
      default: "#fff"
    },
    primary: {
      main: '#03b6e1',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16
  },
});

export default theme;