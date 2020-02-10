import React, {useState} from 'react';
import PostLikes from './PostLikes';
import Comments from './Comments';

export default function Post(props) {
    const {img, id, dispatch} = props;
    const [liked, setLiked] = useState(false)
    
    const handleLike = (id) => {
        if (liked) {
            setLiked(!liked)
            dispatch({type: 'POST_DISLIKE', id: id})
        } else {
            setLiked(!liked)
            dispatch({type: 'POST_LIKE', id: id})
        }
    };
    
    return (
        <div className="post">
            <img className="post-img" onDoubleClick={() => handleLike(id)} src={img} alt=""/>
            <PostLikes {...props} liked={liked} setLiked={setLiked} />
            <Comments {...props} />
        </div>
    )
}
