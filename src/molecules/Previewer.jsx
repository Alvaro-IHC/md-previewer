import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Previewer = ({ expanded, value }) => {
  return (
    <div id="preview" className={`content ${expanded ? "expanded": ""}`}>
        {/* <ReactMarkdown>{value}</ReactMarkdown> */}
        <ReactMarkdown children={value} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default Previewer;
