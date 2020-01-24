import React from "react";
import "./Forum.css";
import { Link } from "react-router-dom";

const threadBox = props => {
	const { thread } = props;

	let replyCount = 0;

	if (thread.replies) {
		replyCount = thread.replies.length;
	}

	return (
		<tr>
			<td>	<Link to={`./forums/${thread.id}`}>{thread.title} {thread.lastUpdated}</Link> </td>
			<td>{thread.user.name}</td>
			<td> {replyCount} </td>
		</tr>
	);
};

export default threadBox;
