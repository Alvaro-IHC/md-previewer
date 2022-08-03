import React from "react";
import BarTitle from "../atoms/BarTitle";

const Container = ({ children, title, className }) => {
  return (
    <div className={`container ${className}`}>
      <BarTitle title={title} />
      {children}
    </div>
  );
};

export default Container;
