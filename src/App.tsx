import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import { theme } from './utils/theme';
import Pomodoro from './pages/Pomodoro';

// const App: FC = () => <div>
//   <Box>
//     <Typography>Pomodoro</Typography>
//   </Box>
// </div>

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <Pomodoro />
    </MuiThemeProvider>
  )
}
export default App;
