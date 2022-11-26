import { SET_APP_COLOR } from '../actionTypes/settingsActionType';

export function setAppColor(data: IApp) {
  return (dispatch: DispatchType) => {
    dispatch({ type: SET_APP_COLOR, data });
  };
}


