import { SET_APP_COLOR } from '../actionTypes/settingsActionType';

const initialState: ISettings = {
  appColor: '#FD6920',
  // fontFamily: 'san-sariff',
}
// eslint-disable-next-line
export default function settingsReducer(state = initialState, action: AppAction): ISettings {
  const { data, type } = action;
  switch (type) {
    case SET_APP_COLOR:
        console.log(data)
        console.log(type)
      return {
        ...state,
        appColor: data,
      };
    default:
      return state;
  }
}
