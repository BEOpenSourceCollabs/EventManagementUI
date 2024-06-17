import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#fffff',
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
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }
            },
          }
      ],
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
