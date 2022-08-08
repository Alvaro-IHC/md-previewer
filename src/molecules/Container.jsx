import React from "react";
import BarTitle from "../atoms/BarTitle";

const Container = ({
  children,
  title,
  className,
  expanded,
  handleExpanded,
}) => {
  return (
    <div className={`container ${expanded ? "expanded" : ""} ${className}`}>
      {/* <div className={`container ${className}`}> */}
      <BarTitle
        title={title}
        expanded={expanded}
        handleExpanded={handleExpanded}
      />
      {children}
    </div>
  );
};

export default Container;
