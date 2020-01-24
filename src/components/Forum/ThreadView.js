import React from "react";
import "./Forum.css";

const ThreadView = props => {
	const { reply } = props;

	return (
		<div style={{margin:'auto', marginBottom:'5px', padding: '10px', textAlign:'left'}}>
			<p style={{fontSize:'14px', margin:0}}>User: {reply.userId}</p>
			<p style={{fontSize:'16px', margin:0}}>{reply.title}</p>
		</div>
	);
};

export default ThreadView;
