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

            {/* Purple Header */}
            {/* Purple Header with title, progress, and buttons */}
<div style={{
    backgroundColor: '#b57bff',
    color: 'white',
    padding: '16px 16px',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '-24px -32px 16px -32px' // overlaps padding
}}>
            {/* Back button */}
            <button onClick={onBack} style={{
                backgroundColor: '#b57bff',
                color: '#ffffffff',
                border: 'none',
                borderRadius: 8,
                fontSize: 16,
                cursor: 'pointer',
                
            }}>
                ←
            </button>

    <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
            onClick={() => alert('Shrink not implemented')}
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
            //onClick={onExit}
            //aria-label="Exit tutorial"
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
            <h2 style={{ color: '#b57bff', marginBottom: 20 }}>Introducing: Stax AI Modes</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 20 }}>
                <div>
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
                    <div style={{
                        marginTop: 20,
                        width: 180
                    }}
                    >
                        Generate a simple block code game using a single prompt.
                    </div>
                </div>
                <div>
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
                    <div style={{
                        width: 180,
                        marginTop: 20
                    }}>
                        Debug, Roast, Import, and Improve an existing project
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiTutorialCard;
