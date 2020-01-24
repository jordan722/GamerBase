import React from "react";
import "./Forum.css";

const ThreadView = props => {
	const { reply } = props;

	console.log("view", reply);

	return (
		<div id="reply">
			<p className="reply-box">{reply.userName}</p>
			<p className="reply-box">{reply.title}</p>
		</div>
	);
};

export default ThreadView;
