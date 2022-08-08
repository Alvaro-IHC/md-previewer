import React from "react";

const Previewer = ({ expanded }) => {
  return (
    <div id="previewer" className={`${expanded && "expanded"}`}>
      <div className="content">Hola</div>
    </div>
  );
};

export default Previewer;
