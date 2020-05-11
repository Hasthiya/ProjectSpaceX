import { combineReducers } from 'redux'

import missionsReducer from './slices/missions'

const rootReducer = combineReducers({
  missions: missionsReducer,
})

export default rootReducer