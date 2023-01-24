import React, { useState } from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import Trends from "./Trends";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import WhoToFollow from "./WhoToFollow";
import "./WhoToFollow.css";

import { Avatar } from "@material-ui/core";
import { More } from "@material-ui/icons";

const Widgets = () => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="widgets">
      <div className={`widgets__input ${focus && "focus"}`}>
        <SearchIcon />
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder=" Search Twitter"
          type="text"
        ></input>
      </div>
      <div className="widgets__widgetsContainer">
        <h2>Trends for you</h2>
        <Trends
          trendType="Trending in Ghana"
          name=" Safo Prince"
          tweetNumber="180k Tweets"
          Icon={MoreHorizIcon}
        />
        <Trends
          trendType="Trending in Ghana"
          name=" Kelly"
          tweetNumber="189k Tweets"
          Icon={MoreHorizIcon}
        />
        <Trends
          trendType="Erling Haaland . Trending"
          name="Haaland "
          tweetNumber="180k Tweets"
          Icon={MoreHorizIcon}
        />
        <Trends
          trendType="Sports . Trendig"
          name=" Thomas Partey"
          tweetNumber="180k Tweets"
          Icon={MoreHorizIcon}
        />
        <Trends
          trendType="Trending in Ghana"
          name=" Efia Odo"
          tweetNumber="180k Tweets"
          Icon={MoreHorizIcon}
        />
        <Trends
          trendType="Trending in Ghana"
          name=" TikTok"
          tweetNumber="180k Tweets"
          Icon={MoreHorizIcon}
        />
        <Trends
          trendType="TSports . Trendig"
          name=" Thomas Partey"
          tweetNumber="180k Tweets"
          Icon={MoreHorizIcon}
        />
        <Trends
          trendType="Sports . Trendig"
          name=" Klopp"
          tweetNumber="180k Tweets"
          Icon={MoreHorizIcon}
        />
        <Trends
          trendType="Sports . Trendig"
          name=" Darwin Nunez"
          tweetNumber="180k Tweets"
          Icon={MoreHorizIcon}
        />
        <Trends
          trendType="Trending in Ghana"
          name=" Delete"
          tweetNumber="180k Tweets"
          Icon={MoreHorizIcon}
        />
        <div className="widgets__widgetsShowMore">
          <h3>show more</h3>
        </div>
      </div>
      <div className="widget__whoToFollowContainer">
        <h2>Who To Follow</h2>
        <WhoToFollow name="Darius Tron" userName="@Trondarius" />
        <WhoToFollow name="Sally Manford" userName="@salllie_xx" />
        <WhoToFollow name="Portugal" userName="@Selecaoportugal" />
        <div className="widgets__whoToFollowShowMore">
          <h3>show more</h3>
        </div>
      </div>
      <footer className="widgets__footer">
        <p>
          <span>Terms Of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </p>
        <p>
          <span>Accesibility</span>
          <span>Adds info</span>
          <span>More</span>{" "}
          <MoreHorizIcon className=" widgets__footerHOrizon" />
        </p>
        <p>
          <span>&copy; 2022</span>
          <span>Twitter,</span>
          <span>Inc.</span>
        </p>
      </footer>
    </div>
  );
};

export default Widgets;
