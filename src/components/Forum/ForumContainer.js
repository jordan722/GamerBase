import React, { Component } from "react";
import { connect } from "react-redux";
import ForumView from "./ForumView";
import ThreadBox from "./ThreadBox";
import "../users/user.css";

import { GetThreadsThunk, AddThreadThunk } from "../../actions";

class ForumContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			toggle: false
		};
	}

	async componentDidMount() {
		await this.props.getAllThreads();
	}

	handleToggle = () => {
		this.setState({
			toggle: !this.state.toggle
		});
	};

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			toggle: !this.state.toggle
		});

		const date = new Date();

		let thread = {
			id: this.props.allThreads.length + 1,
			lastUpdated:
				date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear(),
			title: this.state.title,
			userId: this.props.user.id //get user info here
		};

		this.props.addThread(thread);
	};

	render() {
		//assumes all threads is an array
		const { allThreads } = this.props;
		console.log("allThreads", allThreads);
		let forumDisplay = undefined;
		let threadBoxes = undefined;

		//outputs information if no threads exist
		if (allThreads !== undefined && allThreads.length === 0) {
			forumDisplay = <div> No threads currently exist </div>;
		} else if (allThreads !== undefined) {
			//console.log(allThreads);
			threadBoxes = allThreads.map(singleThread => {
				//console.log(singleThread)
				return <ThreadBox key={singleThread.id} thread={singleThread} />;
			});
			forumDisplay = <ForumView threadBoxes={threadBoxes} />;
		} else {
			forumDisplay = <div> Could not fetch threads from database </div>;
		}

		let toggledView = (
			<div>
				<div>
					<textarea
						name="title"
						placeholder="Enter title here!"
						value={this.state.title}
						onChange={this.handleOnChange}
						style={{ color: "black" }}
					></textarea>
				</div>
				<button onClick={this.handleSubmit}> Submit </button>
				<button onClick={this.handleToggle}> Cancel </button>
			</div>
		);

		let unToggledView = (
			<div>
				<button onClick={this.handleToggle}> Add Thread </button>
			</div>
		);

		return (
			<div>
				{forumDisplay}
				<div style={{marginTop:'20px'}}>
					{this.props.isLoggedIn
						? this.state.toggle
							? toggledView
							: unToggledView
						: ""}
				</div>
			</div>
		);
	}
}

// GET THREAD INFO WHEN THUNKS AND STATES ARE ADDED TO STORE
const mapStateToProps = state => {
	return {
		allThreads: state.thread.allThreads,
		user: state.user.loggedInUser,
		isLoggedIn: !!state.user.loggedInUser.id
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAllThreads: () => dispatch(GetThreadsThunk()),
		addThread: thread => dispatch(AddThreadThunk(thread))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForumContainer);
