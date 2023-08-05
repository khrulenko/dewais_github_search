import { createTheme, ThemeOptions } from '@mui/material';
import { grey, blueGrey } from '@mui/material/colors';
import MuiButton from './muiComponents/MuiButton';
import MuiCssBaseline from './muiComponents/MuiCssBaseline';
import MuiTextField from './muiComponents/MuiTexfield';

const palette = {
  primary: {
    light: grey[100],
    main: grey[900],
    dark: grey[700],
    contrastText: '#fff',
  },
  secondary: blueGrey,
};

const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline,
    MuiTextField,
    MuiButton,
  },
} as ThemeOptions);

export default theme;
