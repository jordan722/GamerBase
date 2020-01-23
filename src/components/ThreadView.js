import React from "react";
import "./Forum.css";

const ThreadView = props => {
  const { reply } = props;

  return (
    <div id="reply">
      <p className="reply-box">{reply.title}</p>
      <p className="reply-box">{reply.userId}</p>
    </div>
  );
};

export default ThreadView;
