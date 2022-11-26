import { SET_APP_COLOR, SET_APP_FONT, SET_LONG_TIME, SET_POMODORO, SET_SHORT_TIME, SET_TIME_TYPE } from '../actionTypes/settingsActionType';

const initialState: ISettings = {
  appColor: '#FF716E',
  appFont: 'san-serif',
  longTime: 15,
  shortTime: 5,
  pomodoro: 20,
  timeType: 'pomodoro',
}
// eslint-disable-next-line
export default function settingsReducer(state = initialState, action: AppAction): ISettings {
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
      case SET_TIME_TYPE:
      return {
        ...state,
        timeType: data,
      };
    default:
      return state;
  }
}
