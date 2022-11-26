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
    longTime: number,
    shortTime: number,
    pomodoro: number,
    timeType: string,
  }

  type DispatchType = (args: AppAction) => AppAction;
