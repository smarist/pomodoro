import {
  SET_APP_COLOR,
  SET_APP_FONT,
  SET_LONG_TIME,
  SET_POMODORO,
  SET_SHORT_TIME,
  SET_MODE,
  DEC_MIN,
  SET_PAUSE,
  SET_START,
  DEC_SEC,
  SET_RESTART,
  SET_TIMER_END,
  SET_STARTING_MIN,
} from "../actionTypes/settingsActionType";

const initialState: ISettings = {
  appColor: "#FF716E",
  appFont: "san-serif",
  longTime: 10,
  shortTime: 5,
  pomodoro: 25,
  mode: "pomodoro",
  minutes: 25,
  seconds: 0,
  hasStarted: false,
  timerDidEnd: false,
  pause: true,
  startingMinutes: 25,
  startingSeconds: 0,
};
// eslint-disable-next-line
export default function settingsReducer(
  state = initialState,
  action: AppAction
): ISettings {
  const { data, type } = action;
  switch (type) {
    case SET_APP_COLOR:
      return {
        ...state,
        appColor: data,
      };
    case SET_APP_FONT:
      return {
        ...state,
        appFont: data,
      };
    case SET_POMODORO:
      return {
        ...state,
        pomodoro: data,
      };
    case SET_LONG_TIME:
      return {
        ...state,
        longTime: data,
      };
    case SET_SHORT_TIME:
      return {
        ...state,
        shortTime: data,
      };
    case SET_MODE:
      return {
        ...state,
        mode: data,
      };
    case DEC_MIN:
      return {
        ...state,
        mode: data,
      };
    case DEC_SEC:
      return {
        ...state,
        mode: data,
      };
    case SET_TIMER_END:
      return {
        ...state,
        timerDidEnd: data || true,
        pause: data || true,
      };
    case SET_PAUSE:
      return {
        ...state,
        pause: !state.pause,
      };
    case SET_START:
      return {
        ...state,
        hasStarted: data || true,
        pause: data || false,
      };
    case SET_RESTART:
      return {
        ...state,
        seconds: 0,
        // minutes: state[state.mode],
        timerDidEnd: false,
        pause: false,
        hasStarted: true,
      };
    case SET_STARTING_MIN:
      return {
        ...state,
        startingMinutes: data,
      };
      console.log(data);
    default:
      return state;
  }
}
