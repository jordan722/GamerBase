import React from "react";
import "./Forum.css";
import { Link } from "react-router-dom";

const threadBox = props => {
	const { thread } = props;

	console.log("box", thread);

	let replyCount = 0;

	if (thread.replies) {
		replyCount = thread.replies.length;
	}

	return (
		<tr>
			<td style={{float:'left', padding:'5px'}}>
				<div style={{textAlign:'left', justifyContent:'left'}}>
				<Link to={`./forums/${thread.id}`} style={{fontSize:'20px', color:'white'}}>
					{thread.title}
				</Link>
				<p style={{fontSize:'12px'}}> Last Updated: {thread.lastUpdated} </p>
				</div>
			</td>
			<td>{thread.user.name}</td>
			<td> {replyCount} </td>
		</tr>
	);
};

export default threadBox;
