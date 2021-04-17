export const RECEIVE_TWEETS = 'RECIEVE_TWEETS'

export function receiveTweet (tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}
