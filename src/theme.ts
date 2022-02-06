import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      contrastText:blueGrey[50],
    },
    secondary: {
      main: '#f44336',
    },
    info: {
      main: '#2666CF',
      contrastText: '#F5F2E7'
    }
  },
});