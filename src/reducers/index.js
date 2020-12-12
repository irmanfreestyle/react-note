import { combineReducers } from 'redux'

import noteReducer from './notereducer'

const rootReducer = combineReducers({
  notes: noteReducer
});

export default rootReducer;
