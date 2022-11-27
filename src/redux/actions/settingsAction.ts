import {
    DEC_MIN,
  DEC_SEC,
  SET_APP_COLOR,
  SET_APP_FONT,
  SET_LONG_TIME,
  SET_MODE,
  SET_PAUSE,
  SET_POMODORO,
  SET_RESTART,
  SET_SHORT_TIME,
  SET_START,
  SET_TIMER_END,
  SET_STARTING_MIN,
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

export function setMode(data: string) {
    return (dispatch: DispatchType) => {
      dispatch({ type: SET_MODE, data });
    };
}

export function setDecMin(data: string) {
    return (dispatch: DispatchType) => {
      dispatch({ type: DEC_MIN, data });
    };
}

export function setSecMin(data: string) {
    return (dispatch: DispatchType) => {
      dispatch({ type: DEC_SEC, data });
    };
}

export function setTimerEnd(data: string) {
    return (dispatch: DispatchType) => {
      dispatch({ type: SET_TIMER_END, data });
    };
}

export function setPause(data: string) {
    return (dispatch: DispatchType) => {
      dispatch({ type: SET_PAUSE, data });
    };
}

export function setStart(data: string) {
    return (dispatch: DispatchType) => {
      dispatch({ type: SET_START, data });
    };
}

export function setRestart(data: string) {
    return (dispatch: DispatchType) => {
      dispatch({ type: SET_RESTART, data });
    };
}

export function setStartingMin(data: string) {
    return (dispatch: DispatchType) => {
      dispatch({ type: SET_STARTING_MIN, data });
    };
}