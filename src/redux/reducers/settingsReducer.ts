import { SET_APP_COLOR, SET_APP_FONT } from '../actionTypes/settingsActionType';

const initialState: ISettings = {
  appColor: '#FD6920',
  appFont: 'san-serif',
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
    default:
      return state;
  }
}
