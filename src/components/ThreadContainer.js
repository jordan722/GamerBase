import React, {Component} from 'react'
import ThreadView from './ThreadView'
import {connect} from 'react-redux'

import {GetThreadThunk} from '../actions'

class ThreadContainer extends Component{
    constructor(props){
        super(props);

        this.state = {}
    }

    componentDidMount(){
        this.props.getThread(this.props.match.params.threadId);
        // console.log("Current thread in component mount: " + this.props.currThread)
        
        this.setState({
            thread: this.props.currThread
        })
    }


    render(){

        if (this.state.thread === undefined){
            return <div style={{paddingTop: "100px"}}> This thread does not exist </div>
        }

        return(<div>
                <ThreadView thread={this.state.thread}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currThread: state.thread.currThread
    }
};

const mapDispatchToProps = dispatch => {
    return{
        getThread: id => dispatch(GetThreadThunk(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);