import React, { Component } from "react";
import ThreadView from "./ThreadView";
import { connect } from "react-redux";
import "./Forum.css";

import { GetThreadThunk, AddThreadReplyThunk } from "../../actions";

class ThreadContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postContent: "",
			isEdited: false,
			toggle: false
		};
	}

	async componentDidMount() {
		await this.props.getThread(this.props.match.params.threadId);
	}

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleToggle = event => {
		this.setState({
			toggle: !this.state.toggle
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			toggle: !this.state.toggle
		});

		const reply = {
			userId: this.props.user.id,
			userName: this.props.user.name,
			title: this.state.postContent,
			threadId: this.props.match.params.threadId
		};

		this.props.addThreadReply(this.props.match.params.threadId, reply);
	};

	render() {
		let threadRender = undefined;
		let threadReplies = undefined;

		let toggledView = (
			<div>
				<textarea
					name="postContent"
					value={this.state.postContent}
					onChange={this.handleOnChange}
					className="text-box-forum"
				></textarea>
				<div>
					<button className="forum-buttons" onClick={this.handleSubmit}>
						submit
					</button>
				</div>
			</div>
		);

		let unToggledView = (
			<div>
				<button className="forum-buttons" onClick={this.handleToggle}>
					Reply
				</button>
			</div>
		);

		if (this.props.currThread === undefined) {
			threadRender = (
				<div style={{ paddingTop: "100px" }}> This thread does not exist </div>
			);
		} else if (this.props.currThread.replies) {
			threadReplies = this.props.currThread.replies.map((reply, i) => (
				<ThreadView key={i} reply={reply} />
			));

			threadRender = (
				<div style={{ paddingTop: "100px" }}>
					<div
						style={{
							backgroundColor: "#18181b",
							width: "90%",
							borderRadius: "10px",
							margin: "auto",
							marginBottom: "20px",
							paddingTop: "5px",
							paddingBottom: "5px",
							boxShadow: "0 0 10px black"
						}}
					>
						<p style={{ margin: 0, fontSize: "20px" }}>
							{this.props.currThread.title}
						</p>
						<p style={{ margin: 0, fontSize: "12px" }}>
							Created by {this.props.currThread.user.name} on
							{this.props.currThread.createdAt.slice(0, 10)}
						</p>
					</div>
					<div
						style={{
							backgroundColor: "#18181b",
							width: "90%",
							borderRadius: "10px",
							margin: "auto",
							marginBottom: "20px",
							paddingTop: "5px",
							paddingBottom: "5px",
							boxShadow: "0 0 10px black"
						}}
					>
						{threadReplies}
					</div>
					<div>
						{this.props.isLoggedIn ? (
							this.state.toggle ? (
								toggledView
							) : (
								unToggledView
							)
						) : (
							<p style={{ fontSize: "20px" }}>Login to add a reply!</p>
						)}
					</div>
				</div>
			);
		} else {
			threadRender = (
				<div style={{ paddingTop: "100px" }}>
					<div
						style={{
							backgroundColor: "#18181b",
							width: "90%",
							borderRadius: "10px",
							margin: "auto",
							marginBottom: "20px",
							paddingTop: "5px",
							paddingBottom: "5px",
							boxShadow: "0 0 10px black"
						}}
					>
						<p style={{ margin: 0, fontSize: "20px" }}>
							{this.props.currThread.title}
						</p>
						<p style={{ margin: 0, fontSize: "12px" }}>
							Created by {this.props.currThread.user.name} on this
							{this.props.currThread.createdAt.slice(0, 10)}
						</p>
					</div>
					<div
						id="replies"
						style={{
							backgroundColor: "#18181b",
							width: "70%",
							borderRadius: "10px",
							margin: "auto",
							marginBottom: "20px",
							paddingTop: "5px",
							paddingBottom: "5px",
							boxShadow: "0 0 10px black"
						}}
					>
						{threadReplies}
					</div>
					<div>
						{this.props.isLoggedIn
							? this.state.toggle
								? toggledView
								: unToggledView
							: ""}
					</div>
				</div>
			);
		}

		return <div>{threadRender}</div>;
	}
}

//This is suppose to give the state currThread to our this.props
const mapStateToProps = state => {
	return {
		currThread: state.thread.currThread,
		user: state.user.loggedInUser,
		isLoggedIn: !!state.user.loggedInUser.id
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getThread: id => dispatch(GetThreadThunk(id)),
		addThreadReply: (threadId, threadReply) =>
			dispatch(AddThreadReplyThunk(threadId, threadReply))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);
