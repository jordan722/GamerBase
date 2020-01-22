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

  //Dummy data
  componentDidMount() {
    this.props.getAllThreads();
    this.setState({
      last_updated: "Just ",
      post_name: "Submit",
      reply_count: this.state.reply_count,
      creater: this.state.creater
    });
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
        <div id="TEXT">
          <textarea placeholder="Enter question here!" id="textarea"></textarea>
          <button onClick={this.handleSubmit} id="submit_thread">
            Submit
          </button>
        </div>
      );
    }
  };

  render(){
        //assumes all threads is an array
        const { allThreads } = this.props;
        let forumDisplay = undefined;
        let threadBoxes = undefined;

        //outputs information if no threads exist
        if(allThreads !== undefined && allThreads.length === 0){
            forumDisplay = <div> No threads currently exist </div>
        }else if(allThreads){
            //console.log(allThreads);
            threadBoxes = allThreads.map(singleThread => {
                //console.log(singleThread)
                return <ThreadBox key={singleThread.id} thread={singleThread} />
                }
            )
            forumDisplay = <ForumView threadBoxes={threadBoxes}/>
        }

        let displayAll = this.display();

        return(<div>
                {forumDisplay}
                <div>
                    {displayAll}
                    <button onClick={this.handleThread}>Add thread</button>
                </div>
            </div>
        )
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
