import React, { Component } from "react";
import { connect } from "react-redux";
import ForumView from "./ForumView";
import ThreadBox from "./ThreadBox";
import "./users/user.css";

import { GetThreadsThunk, AddThreadThunk } from "../actions";

class ForumContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last_updated: "",
      post_name: "",
      reply_count: "",
      creater: "",
      toggle: true
    };
  }

  handleThread = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let thread = {
      id: 3,
      last_updated: this.state.last_updated,
      post_name: this.state.post_name,
      reply_count: this.state.reply_count,
      creater: this.state.creater
    };
    this.props.addThread(thread);
  };

  display = () => {
    if (this.state.toggle) {
      return null;
    } else {
      return (
        <div>
          <textarea placeholder="Enter question here!" id="textarea"></textarea>
          <button onClick={this.handleSubmit} id="submit_thread">
            Submit
          </button>
        </div>
      );
    }
  };

  componentDidMount() {
    this.props.getAllThreads();
  }

  render() {
    //assumes all threads is an array
    const { allThreads } = this.props;
    let threadBoxes = undefined;

    //outputs information if no threads exist
    if (allThreads !== undefined && allThreads.length === 0) {
      threadBoxes = <div> No threads currently exist </div>;
    } else if (allThreads) {
      console.log(allThreads);
      threadBoxes = allThreads.map(singleThread => {
        console.log(singleThread);
        return <ThreadBox key={singleThread.id} thread={singleThread} />;
      });
    }

    let displayAll = this.display();

    return (
      <div>
        <ForumView threadBoxes={threadBoxes} />
        <div>
          {displayAll}
          <button onClick={this.handleThread}>Add thread</button>
        </div>
      </div>
    );
  }
}

// GET THREAD INFO WHEN THUNKS AND STATES ARE ADDED TO STORE
const mapStateToProps = state => {
  return {
    allThreads: state.thread.allThreads
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllThreads: () => dispatch(GetThreadsThunk()),
    addThread: thread => dispatch(AddThreadThunk(thread))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForumContainer);
