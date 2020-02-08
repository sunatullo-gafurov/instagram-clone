import React, {useState} from 'react';

export default function PostLikes(props) {
    const {likes, id, handlePostDislike, handlePostLike} = props;
    const [liked, setLiked] = useState(false)

    return (
        <div>
            {liked ? <span onClick={() => {handlePostDislike(id); setLiked(!liked)}}><img src="https://www.transparentpng.com/download/instagram-heart/CYXrdl-instagram-heart-hd-photo-png.png" alt="" className="red-heart-post" /></span> : <span onClick={() => {handlePostLike(id); setLiked(!liked)}}><img src="https://www.transparentpng.com/download/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png" alt="" className="heart-post" /></span>} <span><img src="https://static.thenounproject.com/png/638755-200.png" alt="" className="comment-img" /></span>
            <div className="post-likes">{likes} likes</div>
        </div>
    )
}
