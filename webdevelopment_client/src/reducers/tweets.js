import posts from "./data/tweets.json";

const tweets = (state = [], action) => {
  switch (action.type) {
    case 'fetch-all-tweets':
      return [...action.tweets]
    case "like-tweet":
      return state.map((tweet) => {
        if (tweet._id === action.tweet._id) {
          if (tweet.loved) {
            tweet.loved = false;
            tweet.love--;
          } else {
            tweet.loved = true;
            tweet.love++;
          }
          return tweet;
        } else {
          return tweet;
        }
      });
    case "delete-tweet":
      return state.filter((tweet) => tweet._id !== action.tweet._id);
    case "create-tweet":
      return [action.tweet, ...state]
    default:
      return state;
  }
};

export default tweets;
