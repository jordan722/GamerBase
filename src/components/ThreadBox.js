import React from 'react';
import './Forum.css';
import {Link} from 'react-router-dom'


const ThreadBox = props => {
    const { thread } = props;

    let replyCount = 0;

    if(thread.replies !== undefined){
        replyCount = thread.replies.length
    }

    return(
        <div className='thread-box'>
            {
                //Ideally would have display: flex  +  flex-direction: row
            }
            <p className="last-updated">{thread.lastUpdated}</p>
            <p className="post-name">
                <Link to={`./forums/${thread.id}`}>{thread.postName}</Link>
            </p>
            <p className="reply-count">{replyCount}</p>
            <p className="creator">{thread.creator}</p>
        </div>
    )
}

export default ThreadBox;