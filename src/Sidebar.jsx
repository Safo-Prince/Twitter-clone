import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import HiHashtag from "@meronex/icons/hi/HiHashtag";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar, Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption active Icon={HomeIcon} text="Home" />

      <div className="sidebar__hashtag">
        <HiHashtag className="sidebar__hashtagIcon" />
        <div className="sidebar__explore">
          <span> Explore </span>
        </div>
      </div>

      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      <div className="sidebar__profile">
        <Avatar />
        <div className="sidebar__profileUsername">
          <h3>Safo Prince</h3>
          <h3>@SafoPrince6</h3>
        </div>

        <MoreHorizIcon className="sidebar__horizon" />
      </div>
    </div>
  );
};

export default Sidebar;
