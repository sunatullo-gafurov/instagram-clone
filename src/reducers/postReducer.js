const reducer = (state, action) => {
    switch (action.type) {
        case 'POST_LIKE':
            return state.map(post => action.id === post.id ? {...post, likes: post.likes + 1} : post);
        case 'POST_DISLIKE':
            return state.map(post => action.id === post.id ? {...post, likes: post.likes - 1} : post);
        case 'COMMENT_LIKE':
            return state.map(post => {
                if (action.id === post.id) {
                    return {...post, comments: post.comments.map(comment => action.commentId === comment.id ? {...comment, likes: comment.likes + 1} : comment)}
                } else {
                    return post;
                }
            });
        case 'COMMENT_DISLIKE':
            return state.map(post => {
                if (action.id === post.id) {
                    return {...post, comments: post.comments.map(comment => action.commentId === comment.id ? {...comment, likes: comment.likes - 1} : comment)}
                } else {
                    return post;
                }
            });
        case 'ADD_COMMENT':
            let randomId = Math.floor(Math.random() * 50 + 1);
            return state.map(post => {
                if (action.id === post.id) {
                    return {...post, comments: [...post.comments, {likes: 0, text: action.text, id: randomId, img: 'https://i.pravatar.cc/20?img=' + randomId}]};
                } else {
                    return post;
                }
                
            });
        case 'DELETE_COMMENT':
            return state.map(post => {
                if (action.id === post.id) {
                    return {...post, comments: post.comments.filter(comment => action.commentId !== comment.id)};
                } else {
                    return post;
                }
            });
        default:
            return state;
    }
};

export default reducer;