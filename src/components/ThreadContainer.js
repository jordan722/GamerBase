import React, {Component} from 'react'
import ThreadView from './ThreadView'
import {connect} from 'react-redux'
import './Forum.css'

import {GetThreadThunk, AddThreadReplyThunk} from '../actions'

class ThreadContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: "AwesomeMan", //get user data and insert
            postTime: "beginning of time", //insert current date here
            postContent: "w00t w00t",
            isEdited: false
        }
    }


    componentDidMount(){
        this.props.getThread(this.props.match.params.threadId);
        //console.log("Current thread in component mount: " + this.props.currThread)
        //Will result in null, and then will update to proper value due to store being async
    }

    handleSubmit = (event) => {
        console.log(this.state)
        // this.props.addThreadReply(this.state);
    }


    render(){
        let threadRender = undefined;
        let threadReplies = undefined;

        if (this.props.currThread === null){
            threadRender = <div style={{paddingTop: "100px"}}> This thread does not exist </div>
        } else {
            console.log(this.props.currThread)
            threadReplies = this.props.currThread.replies.map(singleReply =>
                <ThreadView key={singleReply.replyId} reply={singleReply} />
            )
            

            threadRender = <div style={{paddingTop: "100px"}}>
                {this.props.currThread.postName}
                {threadReplies}
            </div>
        }

        return(<div>
                {threadRender}

                <button onClick={this.handleSubmit}> Reply </button>
            </div>
        )
    }
}


//This is suppose to give the state currThread to our this.props
const mapStateToProps = state => {
    // console.log(state.thread.currThread);
    return {
        currThread: state.thread.currThread
    }
};

const mapDispatchToProps = dispatch => {
    return{
        getThread: id => dispatch(GetThreadThunk(id)),
        //addThreadReply: (threadReply) => dispatch(AddThreadReplyThunk(threadReply))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);