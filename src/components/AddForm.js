import React, { useState } from 'react';

export default function AddForm(props) {
    const {id, handleAddComment} = props;
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddComment(id, text);
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
