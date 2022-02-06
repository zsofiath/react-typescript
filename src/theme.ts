import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      "50":blueGrey[50],
      "100":blueGrey[100],
      "200":blueGrey[200],
      "300":blueGrey[300],
      "400":blueGrey[400],
      "600":blueGrey[600],
      "700":blueGrey[700],
      "800":blueGrey[800],
      "900":blueGrey[900]
    },
    secondary: {
      main: '#f44336',
    },
  },
});