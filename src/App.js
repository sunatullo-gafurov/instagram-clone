import React from 'react';
import Wall from './components/Wall';
import './App.css';

export default function App() {
    return (
        <div className="App">
            <img className="logo" src="https://www.transparentpng.com/download/logo-instagram/g3tCwR-logo-instagram-high-quality-pictures.png" alt="" />
            <h2 className="title">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h2>
            <div className="wall"><Wall /></div>
        </div>
    )
}