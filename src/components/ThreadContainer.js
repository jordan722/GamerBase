import React, {Component} from 'react'
import ThreadView from './ThreadView'
import {connect} from 'react-redux'
import './Forum.css'

import {GetThreadThunk, GetThreadInfoThunk} from '../actions'

class ThreadContainer extends Component{
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.getThread(this.props.match.params.threadId);
        this.props.getThreadInfo();
        //console.log("Current thread in component mount: " + this.props.currThread)
        //Will result in null
    }


    render(){
        const { threadInfo } = this.props;
        let threadRender = undefined;
        let threadReplies = undefined;

        if (this.props.currThread === null || this.props.threadInfo === null){
            threadRender = <div style={{paddingTop: "100px"}}> This thread does not exist </div>
        } else if (threadInfo){
            threadReplies = threadInfo.map(entireThread =>
                entireThread.threadReplies.map(singleReply => <ThreadView key={singleReply.replyId} threadInfo={singleReply} />)
                )

            // console.log(threadReplies)

            threadRender = <div style={{paddingTop: "100px"}}>
                {this.props.currThread.postName}
                {threadReplies}
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
    console.log(state.thread.currThread);
    return {
        currThread: state.thread.currThread,
        threadInfo: state.thread.threadInfo
    }
};

const mapDispatchToProps = dispatch => {
    return{
        getThread: id => dispatch(GetThreadThunk(id)),
        getThreadInfo: () => dispatch(GetThreadInfoThunk())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);