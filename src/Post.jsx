import { Avatar } from "@material-ui/core";
import React from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import "./Post.css";
import BsChat from "@meronex/icons/bs/BsChat";
import MdcTwitterRetweet from "@meronex/icons/mdc/MdcTwitterRetweet";
import AiOutlineHeart from "@meronex/icons/ai/AiOutlineHeart";
import FiShare from "@meronex/icons/fi/FiShare";
const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headertext">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />}@
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescroiption">
            <p> {text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <div className="post__replyIcon">
            <BsChat /> <span> 8</span>
          </div>
          <div className="post__tweetIcon">
            <MdcTwitterRetweet /> <span> 8</span>
          </div>
          <div className="post__heartIcon">
            <AiOutlineHeart /> <span> 8</span>
          </div>

          <div className="post__shareIcon">
            <FiShare /> <span> 8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
