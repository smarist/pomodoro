import { SET_APP_COLOR } from '../actionTypes/settingsActionType';

const initialState: ISettings = {
  appColor: '#D60',
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
    default:
      return state;
  }
}
