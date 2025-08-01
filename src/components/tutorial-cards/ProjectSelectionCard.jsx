import React from 'react';
import chaseGhostGif from '../gifs/cookie-clicker-step3.gif';
import paintProgramGif from '../gifs/paint-program-preview.gif';
import flashcardFunGif from '../gifs/quick-quiz-step3.gif';

const ProjectSelectionCard = ({ onSelectProject, onBack }) => {
    const projects = [
        { id: 'chase-ghost', label: 'Competitive Clicker', gif: chaseGhostGif },
        { id: 'paint-program', label: 'Paint Program', gif: paintProgramGif },
        { id: 'quick-quiz', label: 'Quick Quiz', gif: flashcardFunGif }
    ];

    const completedProjects = ['chase-ghost']; // Hardcoded for now

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

            {/* Purple Header */}
            {/* Purple Header with title, progress, and buttons */}
<div style={{
    backgroundColor: '#b57bff',
    color: 'white',
    padding: '10px 16px',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '-24px -32px 16px -32px' // overlaps padding
}}>
            {/* Back button at bottom */}
            <button onClick={onBack} style={{
                backgroundColor: 'white',
                color: '#b57bff',
                border: 'none',
                borderRadius: 8,
                fontSize: 16,
                cursor: 'pointer'
            }}>
                Back
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
            <h2 style={{ color: '#b57bff', marginBottom: 20 }}>
                What project would you like to generate?
            </h2>

            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: 30
            }}>
                {projects.map(project => {
                    const isCompleted = completedProjects.includes(project.id);
                    return (
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
                                position: 'relative',
                                opacity: isCompleted ? 0.6 : 1,
                                transition: 'background-color 0.2s ease'
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

                            {isCompleted && (
                                <div style={{
                                    position: 'absolute',
                                    top: 6,
                                    right: 6,
                                    backgroundColor: '#b57bff',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: 24,
                                    height: 24,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    boxShadow: '0 0 4px rgba(0,0,0,0.2)'
                                }}>
                                    ✓
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default ProjectSelectionCard;
