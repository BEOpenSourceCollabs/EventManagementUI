import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffcb05',
    },
    secondary: {
      main: '#ff9933',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
          root: {
              textTransform: 'none',
              disableElevation: true,
              borderRadius: '1rem',
              color: 'black',
              minWidth: '3.125rem',
          },
          outlined: {
              border: `solid 1px ${'lightSilver'}`,
          },
      },
      variants: [
          {
              props: { variant: 'contained', color: 'error' },
              style: {
                  color: 'white',
              },
          },
          {
              props: { variant: 'contained', color: 'warning' },
              style: {
                  color: 'white',
              },
          },
          {
            props: { variant: 'contained', color: 'inherit' },
            style: {
              backgroundColor: 'teal', 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 128, 128, 0.75)',
              }
            },
          }
      ],
  },
  MuiAppBar: {
    styleOverrides: {
        root: {
            background: 'white',
        },
    },
},
    MuiMenuItem: {
      styleOverrides: {
          root: {
              '&.Mui-selected': {
                  backgroundColor: 'transparent',
                  '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
              },
          },
      },
  },
  }
});

export default theme;
