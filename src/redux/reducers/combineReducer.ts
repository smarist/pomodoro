import { combineReducers } from 'redux';
import appReducer from './appReducer';

const reducers = combineReducers({
  app: appReducer,
  });
  
  export default reducers;
  //This RootState is required to use useSelector later on 
  export type RootState = ReturnType<typeof reducers>;
  