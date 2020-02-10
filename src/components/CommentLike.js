import React, { useState } from 'react'

export default function CommentLike(props) {
    const {postId, id, likes, dispatch} = props;
    const [liked, setLiked] = useState(false);
    return (
        <div>
            {liked ? <span><img onClick={() => {dispatch({type: 'COMMENT_DISLIKE', id: postId, commentId: id}); setLiked(!liked)}} src="https://www.transparentpng.com/download/instagram-heart/CYXrdl-instagram-heart-hd-photo-png.png" alt="" className="red-heart-comment" /></span> : <span><img onClick={() => {dispatch({type: 'COMMENT_LIKE', id: postId, commentId: id}); setLiked(!liked)}} src="https://www.transparentpng.com/download/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png" alt="" className="heart-comment" /></span>}
            <div className="comment-like" >{likes} likes</div>
        </div>
    )
}
