import React, { useState } from 'react';
//../gifs/paint-program-step2.gif
import thumbnail from '../gifs/stax-tutorial-thumbnail.gif';
import step2 from '../gifs/stax-tutorial-step2.gif';
import step3 from '../gifs/stax-tutorial-step3.gif';
import step4 from '../gifs/stax-tutorial-step4.gif';
import step5 from '../gifs/stax-tutorial-step5.gif';
import step6 from '../gifs/stax-tutorial-step6.gif';
import step7 from '../gifs/stax-tutorial-step7.gif';
import step8 from '../gifs/stax-tutorial-step8.gif';

const steps = [
    {
        id: 1,
        text: 'Welcome To Stax! This is a tutorial for block coding.',
        gif: thumbnail
    },
    {
        id: 2,
        text: 'Drag and drop a move block to your code space.',
        gif: step2
    },
    {
        id: 3,
        text: 'Click on the move block, and the sprite moves.',
        gif: step3
    },
    {
        id: 4,
        text: 'Let\'s add another block. Drag a looks block and connect it to the move block.',
        gif: step4
    },
    {
        id: 5,
        text: 'Click the blocks. Now the sprite will move and say hi for 2 seconds.',
        gif: step5 
    },
    {
        id: 6,
        text: 'Add an event block to the previous blocks.',
        gif: step6
    },
    {
        id: 7,
        text: 'Press the blue flag, and the sprite will play out the blocks.',
        gif: step7
    },
    {
        id: 8,
        text: 'Edit blocks to customize! For example, edit looks block to make the sprite say \'Bye!\'.',
        gif: step8
    },
    {
        id: 9,
        text: 'Introducing: Stax AI! Go to the AI Tutorials to learn more',
        isFinal: true
    }
];

const IntroStax = ({ onBack, onExit, onGoToAITutorial }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        } else {
            onBack();
        }
    };

    const step = steps[currentStep];

    return (
        <div style={{
            position: 'absolute',
            top: 40,
            right: 40,
            width: 540,
            height: 350,
            backgroundColor: 'white',
            border: '2px solid #ccc',
            borderRadius: 16,
            padding: 24,
            zIndex: 1000,
            fontFamily: 'sans-serif',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            textAlign: 'center'
        }}>

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
                margin: '-24px -24px 16px -24px'
            }}>
                <div style={{ fontSize: 16, fontWeight: 'bold' }}>Tutorial</div>

                {/* Progress dots */}
                <div style={{ display: 'flex', gap: 6 }}>
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                backgroundColor: index === currentStep ? 'white' : '#ffffff66'
                            }}
                        />
                    ))}
                </div>

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

            {/* Step text */}
            <h2 style={{ color: '#b57bff', marginBottom: 16, fontSize: 16 }}>{step.text}</h2>

            <div style={{
                position: 'relative',
                width: '100%',
                height: 200,
                marginBottom: 10,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Left arrow */}
                <button
                    onClick={handlePrev}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: -20,
                        transform: 'translateY(-50%)',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: '#b57bff',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                        userSelect: 'none',
                        fontSize: 20
                    }}
                    aria-label="Previous Step"
                >
                    ←
                </button>

                {/* Center content */}
                {step.isFinal ? (
                    <button
                        onClick={onGoToAITutorial}
                        style={{
                            padding: '12px 24px',
                            fontSize: 16,
                            backgroundColor: '#b57bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: 8,
                            cursor: 'pointer',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                        }}
                    >
                        Go to AI Tutorial →
                    </button>
                ) : (
                    <img
                        src={step.gif}
                        alt={`Step ${step.id}`}
                        style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 8 }}
                    />
                )}

                {/* Right arrow */}
                <button
                    onClick={handleNext}
                    disabled={currentStep === steps.length - 1}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: -20,
                        transform: 'translateY(-50%)',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: currentStep === steps.length - 1 ? '#ccc' : '#b57bff',
                        color: 'white',
                        border: 'none',
                        cursor: currentStep === steps.length - 1 ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                        userSelect: 'none',
                        fontSize: 20
                    }}
                    aria-label="Next Step"
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default IntroStax;
