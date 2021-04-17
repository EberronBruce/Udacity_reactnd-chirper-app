export const RECIEVE_TWEETS = 'RECIEVE_TWEETS'

export function receiveTweet (tweets) {
  return {
    type: RECIEVE_TWEETS,
    tweets,
  }
}
