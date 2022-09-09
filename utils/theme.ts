import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#124C5F',
      light: '#C7E7E1',
    },
    secondary: {
      main: '#FFEB91',
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'black',
          fontWeight: 500,

          '&:hover, &.active': {
            color: '#124C5F',
          },
        },
      },
    },
  },
});
