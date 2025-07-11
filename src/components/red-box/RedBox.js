import React, { useState } from 'react';

const RedBox = () => {
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);
  const [previousPrompt, setPreviousPrompt] = useState('');
  const [activeTab, setActiveTab] = useState('Code');
  const [status, setStatus] = useState(null); // null | 'loading' | 'complete'
  const [showPreviousPrompt, setShowPreviousPrompt] = useState(false);

  const tabs = ['Code', 'Q&A', 'Coach', 'Prompts'];

  const boxStyle = {
    position: 'absolute',
    top: '150px',
    left: '400px',
    width: '320px',
    height: '330px',
    border: '2px solid black',
    backgroundColor: 'white',
    padding: '10px',
    boxSizing: 'border-box',
    zIndex: 10000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'Arial, sans-serif',
  };

  const textareaStyle = {
    width: '100%',
    height: '150px',
    fontSize: '16px',
    border: '1px solid #ccc',
    resize: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    padding: '8px',
    boxSizing: 'border-box',
    flexGrow: 1,
  };

  const sendButtonStyle = {
    alignSelf: 'flex-end',
    marginTop: '10px',
    padding: '6px 12px',
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: status === 'loading' || text.trim() === '' ? 'not-allowed' : 'pointer',
    opacity: status === 'loading' || text.trim() === '' ? 0.5 : 1,
  };

  const statusContainerStyle = {
    marginBottom: '10px',
    fontSize: '14px',
    color: '#555',
    fontStyle: 'italic',
    userSelect: 'none',
    minHeight: '40px',
  };

  const tabsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  };

  const tabStyle = (tab) => ({
    padding: '6px 12px',
    cursor: 'pointer',
    backgroundColor: activeTab === tab? '#65239cff' : 'white',
    color: activeTab === tab? 'white' : 'grey', 
    //borderBottom: activeTab === tab ? '3px solid red' : '3px solid transparent',
    fontWeight: activeTab === tab ? 'bold' : 'normal',
    userSelect: 'none',
  });

  const handleSend = () => {
    if (text.trim() === '') return;

    const currentPrompt = text;
    setText(''); // Clear input
    setPreviousPrompt(currentPrompt);
    setShowPreviousPrompt(true);
    setStatus('loading');

    setTimeout(() => {
      setStatus('complete');
      setFocused(false);
    }, 3000);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setStatus(null); //clear status
    setShowPreviousPrompt(false);
  };

  const placeholderText =
    !focused && text === ''
      ? activeTab
        ? `Ask ${activeTab.toLowerCase()}...`
        : 'Type in here...'
      : '';

return (
  <div style={boxStyle}>
    {/* Spinner animation */}
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>

    <div style={statusContainerStyle}>
      {showPreviousPrompt && (
        <>
          <div>Previous prompt: {previousPrompt}</div>
          {status && (
            <div style={{
              marginTop: '10px',
              color: status === 'complete' && activeTab === 'Code' ? 'green' : 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              {status === 'loading' ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid #ccc',
                    borderTop: '2px solid #333',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                  }} />
                  {activeTab === 'Code' ? 'Generating...' : 'Thinking...'}
                </>
              ) : (
                <span style={{
                  fontStyle: activeTab !== 'Code' ? 'normal' : 'italic',
                  color: activeTab !== 'Code'? 'black' : 'green'
                }}>
                  {activeTab === 'Code'
                    ? 'Processing complete. Check output blocks for details.'
                    : 'This is an example text where Stax AI would respond to the prompt.'}
                </span>
              )}
            </div>
          )}
        </>
      )}
    </div>

      <textarea
        style={textareaStyle}
        placeholder={placeholderText}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disabled={status === 'loading'}
      />

      <button
        style={sendButtonStyle}
        onClick={handleSend}
        disabled={status === 'loading' || text.trim() === ''}
      >
        Send
      </button>

      <div style={tabsContainerStyle}>
        {tabs.map((tab) => (
          <div
            key={tab}
            style={tabStyle(tab)}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedBox;
