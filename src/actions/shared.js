import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweet(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
