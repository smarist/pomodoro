import {
  SET_APP_COLOR,
  SET_APP_FONT,
  SET_LONG_TIME,
  SET_POMODORO,
  SET_SHORT_TIME,
  SET_TIME_TYPE,
} from "../actionTypes/settingsActionType";

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

export function setPomodoro(data: string) {
  return (dispatch: DispatchType) => {
    dispatch({ type: SET_POMODORO, data });
  };
}

export function setLongTime(data: string) {
  return (dispatch: DispatchType) => {
    dispatch({ type: SET_LONG_TIME, data });
  };
}

export function setShortTime(data: string) {
  return (dispatch: DispatchType) => {
    dispatch({ type: SET_SHORT_TIME, data });
  };
}

export function setTimeType(data: string) {
    return (dispatch: DispatchType) => {
      dispatch({ type: SET_TIME_TYPE, data });
    };
  }
