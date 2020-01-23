import React from "react";
import "./Forum.css";

const ThreadView = props => {
  const { reply } = props;

  return (
    <div id="reply">
      <p className="reply-box">{reply.user}</p>
      <p className="reply-box">{reply.postContent}</p>
      <p className="reply-box">{reply.postTime}</p>
      <p className="reply-box">{reply.isEdited}</p>
    </div>
  );
};

export default ThreadView;
