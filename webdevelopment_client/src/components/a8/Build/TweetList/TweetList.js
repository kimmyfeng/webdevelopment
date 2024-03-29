// import React from "react";
// import TweetListItem from "./TweetListItem";
// import { useSelector } from "react-redux";

// const selectAllTweets = (state) => state.tweets;

// const TweetList = () => {
//   const tweets = useSelector(selectAllTweets);
//   return (
//     <ul className="list-group">
//       {tweets.map((tweet) => {
//         return <TweetListItem key={tweet.id} tweet={tweet} />;
//       })}
//     </ul>
//   );
// };
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/twitterService";

const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
  const dispatch = useDispatch();

const tweets = useSelector(selectAllTweets);
    useEffect(() => {
      fetchAllTweets(dispatch)
    }, [])
      return (
    <ul className="list-group">
      {/* tweets.hasOwnProperty('tweets') */}
      {tweets.map((tweet) => {
        return <TweetListItem key={tweet.id} tweet={tweet} />;
      })}
    </ul>
  );
}
export default TweetList;
