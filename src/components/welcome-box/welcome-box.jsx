import React from 'react';

const WelcomeBox = ({onSelectExperience}) => (
    <div style={{
        position: 'absolute',
        top: 80,           // adjust as needed to fit below editor header
        right: 20,         // position from the right edge of editor workspace
        background: 'white',
        border: '2px solid #999',
        borderRadius: 8,
        padding: 20,
        width: 320,
        zIndex: 10,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        fontFamily: 'Arial, sans-serif',
        userSelect: 'none'
    }}>
        <h2 style={{marginTop: 0}}>Welcome to Stax!</h2>
        <p>What is your experience with block coding (like Scratch)?</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <button onClick={() => onSelectExperience('never')}>I have never used it before</button>
            <button onClick={() => onSelectExperience('couple')}>I have used it a couple of times</button>
            <button onClick={() => onSelectExperience('moderate')}>I used it moderately</button>
            <button onClick={() => onSelectExperience('frequent')}>I use it frequently</button>
        </div>
    </div>
);

export default WelcomeBox;