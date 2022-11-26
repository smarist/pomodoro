import { SET_APP_COLOR } from '../actionTypes/settingsActionType';

export function setAppColor(data: string) {
  return (dispatch: DispatchType) => {
    dispatch({ type: SET_APP_COLOR, data });
  };
}


