import React, {Component} from 'react'
import ThreadView from './ThreadView'
import {connect} from 'react-redux'
import './Forum.css'

import {GetThreadThunk, AddThreadReplyThunk} from '../actions' 

class ThreadContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            postContent: "w00t w00t",
            isEdited: false,
            toggle: false
        }
    }


    componentDidMount(){
        this.props.getThread(this.props.match.params.threadId);
        //console.log("Current thread in component mount: " + this.props.currThread)
        //Will result in null, and then will update to proper value due to store being async
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleToggle = (event) => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            toggle: !this.state.toggle
        })

        const date = new Date();
        let replyId;
        if(this.props.currThread.replies === undefined){
            replyId = 0;
        }else{
            replyId = this.props.currThread.replies.length + 1
        }

        const reply = {
            replyId: replyId, //must autoGenerate 
            user: "AwesomeMan", //get user data and insert
            postTime: date.getDate() + "/" + date.getDay() + "/" + date.getFullYear(), //insert current date here
            postContent: this.state.postContent,
            isEdited: this.state.isEdited
        }

        this.props.addThreadReply(this.props.match.params.threadId, reply);
    }

    render(){
        let threadRender = undefined;
        let threadReplies = undefined;

        let toggledView = <div>
            <textarea name="postContent" value={this.state.postContent} onChange={this.handleOnChange} style={{color: "black"}}></textarea>
            <button onClick={this.handleSubmit}>submit</button>
        </div>

        let unToggledView = <div>
            <button onClick={this.handleToggle}> Reply </button>
        </div>

        if (this.props.currThread === undefined){
            threadRender = <div style={{paddingTop: "100px"}}> This thread does not exist </div>
        } else if (this.props.currThread.replies !== undefined){
            threadReplies = this.props.currThread.replies.map(singleReply =>
                <ThreadView key={singleReply.replyId} reply={singleReply} />
            )

            threadRender = <div style={{paddingTop: "100px"}}>  
                {this.props.currThread.postName}
                {threadReplies}
                {this.state.toggle ? toggledView : unToggledView}
            </div>
        } else {
            threadRender = <div style={{paddingTop: "100px"}}>  
                {this.props.currThread.postName}
                {this.state.toggle ? toggledView : unToggledView}
            </div>
        }

        return(<div>
                {threadRender}
            </div>
        )
    }
}


//This is suppose to give the state currThread to our this.props
const mapStateToProps = state => {
    return {
        currThread: state.thread.currThread,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        getThread: id => dispatch(GetThreadThunk(id)),
        addThreadReply: (threadId, threadReply) => dispatch(AddThreadReplyThunk(threadId, threadReply))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);