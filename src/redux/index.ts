import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxReducer from './reducers/combineReducer';

// const store: Store<IApp, AppAction> & {
//     dispatch: DispatchType
//   } = createStore(reduxReducer, applyMiddleware(thunk))

// export {store};

const initialState = {};

const store = createStore(
  reduxReducer,
  initialState,
  applyMiddleware(thunk)
);

export { store };
