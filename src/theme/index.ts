import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#121826',
      paper: '#1c2435',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b3b8',
    },
  },
  typography: {
    fontFamily: "'Be Vietnam Pro', sans-serif",
    h1: {
      fontSize: '1.75rem',
      fontWeight: 400,
      color: '#CDD5E0 !important',
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 300,
      color: '#CDD5E0 !important',
    },
    body1: {
      fontSize: '0.813rem',
      color: '#97A3B6 !important',
    },
    body2: {
      fontSize: '0.594rem',
      color: '#97A3B6 !important',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(95deg, #111729 3%, #1d1b48 99.61%)',
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          padding: '16px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
