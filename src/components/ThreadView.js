import React from 'react'

const ThreadView = (props) => {
    const { threadInfo } = props;

    return(
        <div>
            <p>{threadInfo.user}</p>
            <p>{threadInfo.postTime}</p>
            <p>{threadInfo.postContent}</p>
            <p>{threadInfo.isEdited}</p>
        </div>
    )
}

export default ThreadView;