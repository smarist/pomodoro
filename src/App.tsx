import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { theme, darkTheme } from './utils/theme';
import Pomodoro from './pages/Pomodoro';
import { useAppSelector } from './redux/hooks/useTypeSelector';

const App: React.FC = () => {
  const appTheme = useAppSelector((state) => state?.app?.appTheme);
  console.log(appTheme);

  return (
    <MuiThemeProvider theme={appTheme === 'light' ? theme : darkTheme}>
        <Pomodoro />
    </MuiThemeProvider>
  )
}

export default App;
