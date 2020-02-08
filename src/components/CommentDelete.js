import React from 'react'

export default function CommentDelete(props) {
    const {id, handleDelete, postId} = props;
    return (
        <div>
            <button className="delete-comment" onClick={() => handleDelete(postId, id)}>Delete</button>
        </div>
    )
}
