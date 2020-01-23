import React from "react";
import "./Forum.css";

const ForumView = props => {
  const { threadBoxes, handleClick } = props;

  return (
    <div className="forum-container">
      <h1> Forum </h1>

      <div className="thread-box-info">
        <p className="last-updated">Last updated</p>
        <p className="post-name">Topic subject</p>
        <p className="reply-count">Replies</p>
        <p className="creator">Created By</p>
      </div>

      <div className="thread-box-container">{threadBoxes}</div>
    </div>
  );
};

export default ForumView;
