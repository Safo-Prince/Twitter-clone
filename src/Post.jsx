import { Avatar } from "@material-ui/core";
import React from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import "./Post.css";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headertext">
            <h3>
              Rafeh Qazi{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @Psam
              </span>
            </h3>
          </div>
          <div className="post__headerDescroiption">
            <p> I challenge you to build</p>
          </div>
        </div>
        <img src="" alt="" />
        <div className="post__footer">
          <ChatBubbleIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
