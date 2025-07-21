import React from 'react';
import chaseGhostGif from '../gifs/ghost-game-preview.gif';
import paintProgramGif from '../gifs/paint-program-preview.gif';
import flashcardFunGif from '../gifs/to-be-added.gif';

const ProjectSelectionCard = ({ onSelectProject, onBack }) => {
    const projects = [
        { id: 'chase-ghost', label: 'Chase Ghost', gif: chaseGhostGif },
        { id: 'paint-program', label: 'Paint Program', gif: paintProgramGif },
        { id: 'flashcard-fun', label: 'Flashcard Fun', gif: flashcardFunGif }
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
            width: 580,
            zIndex: 1000,
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            textAlign: 'center'
        }}>
            <h2 style={{ color: '#b57bff', marginBottom: 20 }}>
                What project would you like to generate?
            </h2>

            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: 30
            }}>
                {projects.map(project => (
                    <div
                        key={project.id}
                        onClick={() => onSelectProject(project.id)}
                        style={{
                            width: 160,
                            height: 160,
                            border: '2px solid black',
                            borderRadius: 12,
                            cursor: 'pointer',
                            backgroundColor: '#f9f9f9',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            transition: 'background-color 0.2s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ddd'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                    >
                        <img
                            src={project.gif}
                            alt={`${project.label} preview`}
                            style={{
                                width: '100%',
                                height: 100,
                                objectFit: 'cover'
                            }}
                        />
                        <div style={{
                            paddingTop: 6,
                            fontWeight: 'bold',
                            fontSize: 14,
                            color: '#333'
                        }}>
                            {project.label}
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={onBack}
                style={{
                    backgroundColor: '#b57bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: 8,
                    padding: '10px 16px',
                    fontSize: 16,
                    cursor: 'pointer'
                }}
            >
                Back
            </button>
        </div>
    );
};

export default ProjectSelectionCard;
