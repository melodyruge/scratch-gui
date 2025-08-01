import React from 'react';

const WelcomeCard = ({ selectedLevel, onSelectLevel }) => {
    const options = [
        { id: 'never', label: 'No', color: '#FFA500' },
        {  id: 'frequent', label: 'Yes', color: '#9C27B0' }
    ];

    return (
        <div style={{
            position: 'absolute',
            top: 40,
            right: 40,
            backgroundColor: 'white',
            border: '2px solid #ccc',
            borderRadius: 16,
            padding: '24px 32px',
            width: 500,
            zIndex: 1000,
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            textAlign: 'center'
        }}>
            <h2 style={{ color: '#b57bff', marginBottom: 10 }}>Welcome to Stax!</h2>
            <p style={{ fontSize: 18, marginBottom: 30 }}>
                Have you used Scratch before?
            </p>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                height: 130,
                marginBottom: 10
            }}>
                {/* Black line */}
                <div style={{
                    position: 'absolute',
                    top: 30,
                    left: '10%',
                    right: '10%',
                    height: 8,
                    backgroundColor: '#444',
                    borderRadius: 4,
                    zIndex: 0
                }} />

                {/* Circles */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0 20px',
                    zIndex: 1
                }}>
                    {options.map(({ id, label, color }) => (
                        <div key={id} style={{ textAlign: 'center' }}>
                            <button
                                onClick={() => onSelectLevel(id)}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: '50%',
                                    border: `6px solid ${color}`,
                                    backgroundColor: 'white',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: 24,
                                    color: selectedLevel === id ? color : 'transparent',
                                    fontWeight: 'bold',
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedLevel !== id) {
                                        e.currentTarget.innerText = '✔';
                                        e.currentTarget.style.color = color;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedLevel !== id) {
                                        e.currentTarget.innerText = '';
                                        e.currentTarget.style.color = 'transparent';
                                    }
                                }}
                            >
                                {selectedLevel === id ? '✔' : ''}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Labels */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0 20px',
                    marginTop: 8
                }}>
                    {options.map(({ id, label, color }) => (
                        <div key={id} style={{
                            textAlign: 'center',
                            fontSize: 12,
                            fontWeight: 500,
                            color,
                            whiteSpace: 'pre-wrap',
                            width: 60
                        }}>
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WelcomeCard;
