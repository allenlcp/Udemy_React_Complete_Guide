import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>I'll be overwritten</p>
        </div>
    )
}

export default userOutput;