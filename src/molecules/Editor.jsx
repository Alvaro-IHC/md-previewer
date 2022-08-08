import React from "react";

const Editor = ({ expanded }) => {
  return (
    <div id="editor" className={`${expanded ? "expanded" : ""}`}>
      <textarea />
    </div>
  );
};

export default Editor;
