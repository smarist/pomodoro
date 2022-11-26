import { combineReducers } from 'redux';
import appReducer from './appReducer';
import settingsReducer from './settingsReducer';
import { store } from '../index';

const reducers = combineReducers({
  app: appReducer,
  settings: settingsReducer,
  });
  
  export default reducers;
  //This RootState is required to use useSelector later on 
  export type RootState = ReturnType<typeof reducers>;
  export type AppDispatch = typeof store.dispatch ;
  