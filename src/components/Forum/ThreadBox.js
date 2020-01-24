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
			<Link to={`./forums/${thread.id}`}>
			<td style={{float:'left', padding:'5px'}}>
				<div style={{textAlign:'left', justifyContent:'left'}}>
				<p style={{fontSize:'22px', color:'white', margin:0}}>	{thread.title} </p>
				<p style={{fontSize:'12px', color:'white',margin:0}}> Last Updated: {thread.lastUpdated} </p>
				</div>
			</td>
			</Link>
			<td>{thread.user.name}</td>
			<td> {replyCount} </td>
		</tr>
	);
};

export default threadBox;
