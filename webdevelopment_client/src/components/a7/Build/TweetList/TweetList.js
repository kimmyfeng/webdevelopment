import React from "react";
import TweetListItem from "./TweetListItem";
import { useSelector } from "react-redux";

const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
  const tweets = useSelector(selectAllTweets);
  return (
    <ul className="list-group">
      {tweets.map((tweet) => {
        return <TweetListItem key={tweet.id} tweet={tweet} />;
      })}
    </ul>
  );
};

export default TweetList;
