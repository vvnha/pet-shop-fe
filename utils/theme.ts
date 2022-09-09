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
      light: '#FFF2B3',
    },
    success: {
      main: '#1DBF73',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Rubik',
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
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Rubik',
          textTransform: 'capitalize',
        },
      },
      variants: [
        {
          props: {
            variant: 'contained',
          },
          style: {
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FFFFFF',
          },
        },
        {
          props: {
            variant: 'outlined',
            size: 'medium',
          },
          style: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            fontStyle: 'normal',
            fontSize: '22px',
            lineHeight: '26px',
            color: 'primary.main',
            textTransform: 'capitalize',
            borderWidth: '2px',

            '&:hover, &.active': {
              borderWidth: '2px',
            },
          },
        },
      ],
    },
  },
});
