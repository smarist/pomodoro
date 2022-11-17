import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../reducers/combineReducer';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;