import React, { useState } from 'react';

export default function AddForm(props) {
    const {id, dispatch} = props;
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_COMMENT', id: id, text: text});
        setText('');

    };
    return (
        <div className="add-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a comment..." onChange={handleChange} value={text} required />
                <button className="add-btn">Post</button>
            </form>
        </div>
    )
}
