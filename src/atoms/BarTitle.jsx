import React from "react";
import { FaFreeCodeCamp, FaExpandArrowsAlt, FaCompressAlt } from "react-icons/fa";

const BarTitle = ({ title, expanded, handleExpanded }) => {
  return (
    <div className="bar-title">
      <div className="left">
        <div className="icon">
          <FaFreeCodeCamp />
        </div>
        <p className="title">{` ${title}`}</p>
      </div>
      <div className="min-max" onClick={handleExpanded}>
        {
        !expanded ?
        <FaExpandArrowsAlt /> :
        <FaCompressAlt />
        }
      </div>
    </div>
  );
};

export default BarTitle;
