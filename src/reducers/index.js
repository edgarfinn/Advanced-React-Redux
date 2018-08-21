import { combineReducers } from 'redux'
import commentsReducer from './comments.js'

export default combineReducers({
  comments: commentsReducer
})
