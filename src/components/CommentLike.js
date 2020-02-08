import React, { useState } from 'react'

export default function CommentLike(props) {
    const {postId, id, likes, handleLiked, handleDisliked} = props;
    const [liked, setLiked] = useState(false);
    return (
        <div>
            {liked ? <span><img onClick={() => {handleDisliked(postId, id); setLiked(!liked)}} src="https://www.transparentpng.com/download/instagram-heart/CYXrdl-instagram-heart-hd-photo-png.png" alt="" className="red-heart-comment" /></span> : <span><img onClick={() => {handleLiked(postId, id); setLiked(!liked)}} src="https://www.transparentpng.com/download/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png" alt="" className="heart-comment" /></span>}
            <div className="comment-like" >{likes} likes</div>
        </div>
    )
}
