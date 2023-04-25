/* const COLORS = {
    text: "#192b59",
    fill: "#5a5ee3",
    bg: "f1f1fa",
    btn: "#fb3857",
    border: "#e0e1ea"
} */

import { createTheme } from '@mui/material/styles'; 

const theme = createTheme({
  palette: {
      primary: {
        light: '#757ce8',
        main: '',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      btn: {
        main: '#fb3857',
        contrastText: '#fff'
      },
      fill: {
        main: '#5a5ee3',
        contrastText: '#fff'
      }
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
});

export default theme;