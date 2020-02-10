import React from 'react';
import AddForm from './AddForm';
import CommentLike from './CommentLike';
import CommentDelete from './CommentDelete';

export default function Comments(props) {
    const {id, comments, dispatch} = props;
    
    return (
        <div className="comment-section">
            <div >
                {comments.map(comment => <div key={comment.id} className="comment"><img className="comment-image" src={comment.img} alt="" /> <span className="text">{comment.text}</span>  
                <CommentLike {...comment} postId={id} dispatch={dispatch} />
                <CommentDelete {...comment} dispatch={dispatch} postId={id} /></div> )}
             </div>
            <AddForm {...props} dispatch={dispatch} />
        </div>
    )
}
