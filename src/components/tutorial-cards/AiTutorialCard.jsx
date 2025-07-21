import React from 'react';

const AiTutorialCard = ({ onClickCode, onClickQA, onBack }) => {
    return (
        <div style={{
            position: 'absolute',
            top: 40,
            right: 40,
            backgroundColor: 'white',
            border: '2px solid #ccc',
            borderRadius: 16,
            padding: '24px 32px',
            width: 540,
            zIndex: 1000,
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            textAlign: 'center',
        }}>
            <h2 style={{ color: '#b57bff', marginBottom: 20 }}>Stax AI Tutorial</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 20 }}>
                <div
                    onClick={onClickCode}
                    style={{
                        width: 200,
                        height: 140,
                        border: '2px solid black',
                        borderRadius: 12,
                        cursor: 'pointer',
                        backgroundColor: '#f9f9f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: 18,
                        transition: 'background-color 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ddd'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                >
                    Code Tutorial
                </div>
                <div
                    onClick={onClickQA}
                    style={{
                        width: 200,
                        height: 140,
                        border: '2px solid black',
                        borderRadius: 12,
                        cursor: 'pointer',
                        backgroundColor: '#f9f9f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: 18,
                        transition: 'background-color 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ddd'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                >
                    Q & A Tutorial
                </div>
            </div>

            {/* Back button at bottom */}
            <button onClick={onBack} style={{
                marginTop: 20,
                backgroundColor: '#b57bff',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '10px 16px',
                fontSize: 16,
                cursor: 'pointer'
            }}>
                Back
            </button>
        </div>
    );
};

export default AiTutorialCard;
