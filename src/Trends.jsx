import React from "react";
import "./Trends.css";

const Trends = ({ trendType, name, tweetNumber, Icon }) => {
  return (
    <div className="trends">
      <div className="trends__trendsDescription">
        <h4> {trendType}</h4>
        <h3> {name}</h3>
        <h4> {tweetNumber}</h4>
      </div>
      <Icon />
    </div>
  );
};

export default Trends;
