import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweeBox__input">
          <Avatar />
          <input placeholder="What's happening" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
        ></input>
        <button className="tweetBox__tweetButton"> Tweet </button>
      </form>
    </div>
  );
};

export default TweetBox;
