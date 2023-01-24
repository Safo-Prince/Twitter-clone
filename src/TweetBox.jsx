import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import GifIcon from "@material-ui/icons/Gif";
import PollIcon from "@material-ui/icons/Poll";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useState } from "react";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";

// Add a new document with a generated id.
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "Safo Prince",
      username: "Psam",
      verified: true,
      text: tweetMessage,
    });

    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweeBox__input">
          <Avatar />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
          />
        </div>
        <span className="tweetBox__publicity">
          <PublicIcon /> Everyone can reply
        </span>
        <div className="tweetBox__line"></div>
        <div className="tweetBox__options">
          <div className="tweetBox__attachments">
            <PermMediaIcon />
            <GifIcon />
            <PollIcon />
            <EmojiEmotionsIcon />
            <ScheduleIcon />
            <LocationOnIcon />
          </div>
          <Button
            onClick={sendTweet}
            type="submit"
            className="tweetBox__tweetButton"
          >
            Tweet
          </Button>
        </div>
      </form>
      <div className="tweetBox__tweetNumber">
        <span> Show 1,1748 Tweets</span>
      </div>
    </div>
  );
};

export default TweetBox;
