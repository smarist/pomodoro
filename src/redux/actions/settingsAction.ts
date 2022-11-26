import { SET_APP_COLOR, SET_APP_FONT } from '../actionTypes/settingsActionType';

export function setAppColor(data: string) {
  return (dispatch: DispatchType) => {
    dispatch({ type: SET_APP_COLOR, data });
  };
}

export function setAppFont(data: string) {
    return (dispatch: DispatchType) => {
      dispatch({ type: SET_APP_FONT, data });
    };
  }


