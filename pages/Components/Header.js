import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CalculateIcon from '@mui/icons-material/Calculate';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

function appBarLabel(label) {
  return (
    <Toolbar>
      <LocalGasStationIcon sx={{mr: 2}}/>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function Header() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('Calculadora de Combustível')}
        </AppBar>

      </ThemeProvider>
    </Stack>
  );
}