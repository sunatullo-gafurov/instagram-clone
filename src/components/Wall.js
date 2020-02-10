import React, {useReducer} from 'react';
import Post from './Post';
import reducer from '../reducers/postReducer';



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
    const [posts, dispatch] = useReducer(reducer, initialPosts);

    return (
        <div>
            {posts.map(post => <Post key={post.id} {...post} dispatch={dispatch} />)}
        </div>
    )
}
