import React from 'react';

const WelcomeCard = ({ onSelectLevel, onShrink, onExit }) => {
    return (
        <div style={{
            position: 'absolute',
            top: 40,
            right: 40,
            backgroundColor: 'white',
            border: '2px solid #ccc',
            borderRadius: 16,
            width: 540,
            zIndex: 1000,
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
            {/* Purple Header with Shrink and Exit */}
            <div style={{
                backgroundColor: '#b57bff',
                color: 'white',
                padding: '10px 16px',
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 48
            }}>
                <button
                    onClick={() => alert('Back not implemented')}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 14,
                        cursor: 'pointer'
                    }}
                >
                     
                </button>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                        onClick={onShrink}
                        style={{
                            fontSize: 12,
                            marginRight: 10,
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Shrink
                    </button>
                    <button
                        onClick={onExit}
                        aria-label="Exit tutorial"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white',
                            cursor: 'pointer',
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            lineHeight: '32px',
                            textAlign: 'center'
                        }}
                    >
                        ×
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{
                padding: '32px 24px',
                textAlign: 'center'
            }}>
                <p style ={{ fontSize: 30, color: '#b57bff', paddingTop: 0, marginTop: 0, fontWeight: 'bold', marginBottom: 30}}>
                    Welcome to Stax!
                </p>
                <p style={{ fontSize: 20, color: '#464646ff', fontWeight: 'bold', marginBottom: 30 }}>
                    Have you used Scratch before?
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <button
                        onClick={() => onSelectLevel('never')}
                        style={{
                            padding: '16px 32px',
                            fontSize: '16px',
                            backgroundColor: '#ff9900',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        No
                    </button>

                    <button
                        onClick={() => onSelectLevel('frequent')}
                        style={{
                            padding: '16px 32px',
                            fontSize: '16px',
                            backgroundColor: '#b57bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeCard;
