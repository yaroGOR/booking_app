import React from "react";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>

        <MoreVertIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">420$</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eaque
          quibusdam autem modi assumenda aspernatur pariatur deleniti dolor.
          Tempore aut eaque ullam dolore iste necessitatibus odit quis obcaecati
          ipsa quos?
        </p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <KeyboardArrowDownIcon/>
                <div className="itemResult">#12k</div>
            </div>
            <div className="item">
                <div className="itemTitle">last week</div>
                <KeyboardArrowDownIcon/>
                <div className="itemResult negative">#12k</div>
            </div>
            <div className="item">
                <div className="itemTitle">last month</div>
                <KeyboardArrowDownIcon/>
                <div className="itemResult positive">$12k</div>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Featured;
