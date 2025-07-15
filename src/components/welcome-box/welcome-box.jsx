import React, { useState, useEffect } from 'react';

const WelcomeBox = () => {
    const [message, setMessage] = useState('What is your experience with block coding (like Scratch)?');
    const [showButtons, setShowButtons] = useState(true);
    const [visible, setVisible] = useState(true); // control whole box visibility

    const handleClick = (level) => {
        if (level === 'moderate' || level === 'frequent') {
            setMessage('Great! Let me introduce you to our new feature: Stax AI TODO: Stax AI tutorial/conversation');
            setShowButtons(false);
        } else if (level === 'never' || level === 'couple') {
            setMessage('Let’s get started with a quick tutorial! TODO: Once message disappears, bring up Stax tutorial');
            setShowButtons(false);

            // Call global function to start the tutorial
            if (typeof window.startCustomTutorial === 'function') {
                window.startCustomTutorial('my-custom-tutorial');
            }
        } else {
            setMessage('Thanks for letting us know!');
            setShowButtons(false);
        }

        // Start the 3-second timer to hide the box
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    };

    // If you want to clear timeout on unmount, you could use useEffect (optional)

    if (!visible) return null;  // Hide entire box after timeout

    return (
        <div style={{
            position: 'absolute',
            top: 80,
            right: 20,
            background: 'white',
            border: '2px solid #ccc',
            borderRadius: 10,
            padding: 20,
            width: 320,
            zIndex: 1000,
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h3>Welcome to Stax!</h3>
            <p>{message}</p>
            {showButtons && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
                    <button onClick={() => handleClick('never')}>Never used it</button>
                    <button onClick={() => handleClick('couple')}>Used a couple of times</button>
                    <button onClick={() => handleClick('moderate')}>Used moderately</button>
                    <button onClick={() => handleClick('frequent')}>Use it frequently</button>
                </div>
            )}
        </div>
    );
};

export default WelcomeBox;
