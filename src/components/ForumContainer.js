import React, {Component} from 'react'
import {connect} from "react-redux"
import ForumView from './ForumView'
import ThreadBox from './ThreadBox'

import { GetThreadsThunk } from '../actions'

class ForumContainer extends Component{
    componentDidMount(){
        this.props.getAllThreads();
    }

    render(){
        //assumes all threads is an array
        const { allThreads } = this.props;
        let threadBoxes = undefined;

        //outputs information if no threads exist
        if(allThreads !== undefined && allThreads.length === 0){
            threadBoxes = <div> No threads currently exist </div>
        }else if(allThreads){
            console.log(allThreads);
            threadBoxes = allThreads.map(singleThread => {
                console.log(singleThread)
                return <ThreadBox key={singleThread.id} thread={singleThread} />
                }
            )
        }

        return(<div>
                <ForumView threadBoxes={threadBoxes}/>
            </div>
        )
    }
}

// GET THREAD INFO WHEN THUNKS AND STATES ARE ADDED TO STORE
const mapStateToProps = state => {
    return {
        allThreads: state.thread.allThreads
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAllThreads: () => dispatch(GetThreadsThunk())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ForumContainer);