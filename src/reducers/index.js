import { combinedReducers } from 'redux'
import authedUser form './authedUser'
import users from './users'
import tweets from './tweets'

export default combineReducers({
  authedUser,
  users,
  tweets
})
