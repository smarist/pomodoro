import { SET_APP_THEME, IS_LOADING } from '../actionTypes/appActionType';

export function setAppTheme(data: IApp) {
  return (dispatch: DispatchType) => {
    dispatch({ type: SET_APP_THEME, data });
  };
}

export function setIsLoading(data: IApp) {
  return (dispatch: DispatchType) => {
    dispatch({ type: IS_LOADING, data });
  }
}



