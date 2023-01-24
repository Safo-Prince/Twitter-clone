import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import React from "react";

const WhoToFollow = ({ name, userName }) => {
  return (
    <div className="WhoToFollowContents">
      <Avatar />
      <div className="WhoToFollowwContents__headerSpecial">
        {name}
        <span>
          <VerifiedUserIcon className="WhoToFollowContents__badge" />
        </span>
        <h5>{userName}</h5>
      </div>
      <div className="WhoToFollowContents__follow">
        <h5> Follow</h5>
      </div>
    </div>
  );
};

export default WhoToFollow;
