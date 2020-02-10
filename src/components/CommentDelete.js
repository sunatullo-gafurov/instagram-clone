import React from 'react'

export default function CommentDelete(props) {
    const {id, dispatch, postId} = props;
    return (
        <div>
            <button className="delete-comment" onClick={() => dispatch({type: 'DELETE_COMMENT', id: postId, commentId: id})}>Delete</button>
        </div>
    )
}
