import React from "react";
import { FaFreeCodeCamp, FaExpandArrowsAlt } from "react-icons/fa";

const BarTitle = ({ title }) => {
  return (
    <div className="bar-title">
      <div className="left">
        <div className="icon">
          <FaFreeCodeCamp />
        </div>
        <p className="title">{` ${title}`}</p>
      </div>
      <FaExpandArrowsAlt />
    </div>
  );
};

export default BarTitle;
