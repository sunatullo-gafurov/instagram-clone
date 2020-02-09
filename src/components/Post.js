import React, {useState} from 'react';
import PostLikes from './PostLikes';
import Comments from './Comments';

export default function Post(props) {
    const {img, handlePostLike, handlePostDislike, id} = props;
    const [liked, setLiked] = useState(false)
    
    const handleLike = (id) => {
        if (liked) {
            setLiked(!liked)
            handlePostDislike(id)
        } else {
            setLiked(!liked)
            handlePostLike(id)
        }
    };
    
    return (
        <div>
            <img onDoubleClick={() => handleLike(id)} src={img} alt=""/>
            <PostLikes {...props} liked={liked} setLiked={setLiked} />
            <Comments {...props} />
        </div>
    )
}
