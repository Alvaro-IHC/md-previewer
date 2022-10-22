import React from "react";

const Editor = ({ expanded, value, handleChange }) => {
  return (
    <div className={`${expanded ? "expanded" : ""}`}>
      <textarea
        id="editor"
        value={value}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </div>
  );
};

export default Editor;
