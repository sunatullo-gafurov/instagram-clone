import React from 'react';
import AddForm from './AddForm';
import CommentLike from './CommentLike';
import CommentDelete from './CommentDelete';

export default function Comments(props) {
    const {id, comments, handleCommentLike, handleCommentDislike, handleDeleteComment} = props;
    
    return (
        <div className="comment-section">
            <div >
                {comments.map(comment => <div key={comment.id} className="comment"><img className="comment-image" src={comment.img} alt="" /> <span className="text">{comment.text}</span>  
                <CommentLike {...comment} postId={id} handleLiked={handleCommentLike} handleDisliked={handleCommentDislike} />
                <CommentDelete {...comment} handleDelete={handleDeleteComment} postId={id} /></div> )}
             </div>
            <AddForm {...props} />
        </div>
    )
}
