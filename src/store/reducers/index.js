
import { combineReducers } from 'redux';
import global from './globalReducers';

const appReducer = combineReducers({
  global
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_ALL') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
