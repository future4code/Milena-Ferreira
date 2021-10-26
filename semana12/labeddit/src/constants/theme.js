import { createTheme } from '@mui/material';
import { primaryColor, secondaryColor } from './colors';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
});