interface IApp {
    appTheme: string
    isLoading: boolean
  }
 
  type AppAction = {
    type: string
    data: any
  }

  interface MuiTheme {
    palette: {
      bgColor: {
        main: string,
      }
    }
  }

  interface ISettings {
    appColor: string
    appFont: string,
    longTime: number | string | any,
    shortTime: number | string | any,
    pomodoro: number | string | any,
    mode: string,
    minutes: any,
    seconds: number,
    hasStarted: boolean,
    timerDidEnd: boolean,
    pause: boolean,
    startingMinutes: number,
    startingSeconds: number,
  }

  type DispatchType = (args: AppAction) => AppAction;
