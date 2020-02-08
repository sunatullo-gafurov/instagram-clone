import React, {useState} from 'react';
import Post from './Post';


const initialPosts = [
    {
        id: 4,
        userId: 1,
        img: 'https://i.pravatar.cc/300?img=18',
        likes: 80,
        comments: [
            {id: 1, userId: 3, img: 'https://i.pravatar.cc/20?img=47', likes: 9, text: 'Who are you talking with? :)'},
            {id: 2, userId: 6, img: 'https://i.pravatar.cc/20?img=42', likes: 5, text: 'Noooo waay'}
        ]
    },
    {
        id: 3,
        userId: 1,
        img: 'https://i.pravatar.cc/300?img=46',
        likes: 48,
        comments: [
            {id: 1, userId: 8, img: 'https://i.pravatar.cc/20?img=14', likes: 3, text: 'Nice pic'},
            {id: 2, userId: 25, img: 'https://i.pravatar.cc/20?img=6', likes: 6, text: 'Impressive'}
        ]
    },
    {
        id: 2,
        userId: 1,
        img: 'https://i.pravatar.cc/300?img=55',
        likes: 63,
        comments: []
    },
    {
        id: 1,
        userId: 1,
        img: 'https://i.pravatar.cc/300?img=51',
        likes: 52,
        comments: [
            {id: 1, userId: 3, img: 'https://i.pravatar.cc/20?img=36', likes: 45, text: 'Nice hat'},
            {id: 2, userId: 6, img: 'https://i.pravatar.cc/20?img=24', likes: 31, text: 'Looking good with this suit'}
        ],
    }
];

export default function Wall() {
    const [posts, setPosts] = useState(initialPosts);

    const handlePostLike = (id) => {
        setPosts(posts.map(post => id === post.id ? {...post, likes: post.likes + 1} : post))
    };
    const handlePostDislike = (id) => {
        setPosts(posts.map(post => id === post.id ? {...post, likes: post.likes - 1} : post))
    };

    const handleCommentLike = (postId, commentId) => {
        console.log(postId, commentId);
        setPosts(posts.map(post => {
            if (postId === post.id) {
                return {...post, comments: post.comments.map(comment => commentId === comment.id ? {...comment, likes: comment.likes + 1} : comment)}
            } else {
                return post;
            }
        }))
    };
    const handleCommentDislike = (postId, commentId) => {
        console.log(postId, commentId);
        setPosts(posts.map(post => {
            if (postId === post.id) {
                return {...post, comments: post.comments.map(comment => commentId === comment.id ? {...comment, likes: comment.likes - 1} : comment)}
            } else {
                return post;
            }
        }))
    };
    let randomId = Math.floor(Math.random() * 50 + 1);
    const handleAddComment = (postId, text) => {
        setPosts(posts.map(post => {
            if (postId === post.id) {
                return {...post, comments: [...post.comments, {likes: 0, text: text, id: randomId, img: 'https://i.pravatar.cc/20?img=' + randomId}]};
            } else {
                return post;
            }
            
        }))
    };

    const handleDeleteComment = (postId, id) => {
        console.log(postId, id);
        setPosts(posts.map(post => {
            if (postId === post.id) {
                return {...post, comments: post.comments.filter(comment => id !== comment.id)};
            } else {
                return post;
            }
        }))
    };
    
    return (
        <div>
            {posts.map(post => <Post key={post.id} {...post} handlePostDislike={handlePostDislike} handlePostLike={handlePostLike} handleCommentLike={handleCommentLike} handleCommentDislike={handleCommentDislike} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} />)}
        </div>
    )
}
