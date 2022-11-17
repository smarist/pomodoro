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

  type DispatchType = (args: AppAction) => AppAction;
