import React from 'react';
import PostLikes from './PostLikes';
import Comments from './Comments';

export default function Post(props) {
    const {img} = props;
    
    
    return (
        <div>
            <img src={img} alt=""/>
            <PostLikes {...props} />
            <Comments {...props} />
        </div>
    )
}
