import React, { useState } from 'react';
import step2 from '../../lib/libraries/decks/steps/press-move-block.gif';
import step3 from '../../lib/libraries/decks/steps/press-move-block.gif';
import step4 from '../../lib/libraries/decks/steps/add-looks-block.gif';
import step5 from '../../lib/libraries/decks/steps/press-looks-block.gif';
import step6 from '../../lib/libraries/decks/steps/add-events-block.gif';
import step7 from '../../lib/libraries/decks/steps/press-events-block.gif';
import step8 from '../../lib/libraries/decks/steps/edit-looks-block.gif';
import step9 from '../../lib/libraries/decks/steps/press-move-block.gif';

const steps = [
    {
        id: 1,
        text: 'Welcome To Stax! This is a tutorial for block coding',
        gif: 'https://pybricks.com/misc/images/home-blocks.svg' // Replace with real URLs or local paths
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
      text: 'Press the blue flag block, and the sprite will play out the blocks.',
      gif: step7
    },
    {
      id: 8,
      text: 'Edit blocks to customize! (ex. edit looks block to make the sprite say \'Bye!\').',
      gif: step8
    },
    {
      id: 9,
      text: 'Learn about Stax AI! Go to the AI Tab to learn more',
      isFinal: true // <- new flag

    }
];

const IntroStax = ({ onBack, onExit, onGoToAITutorial}) => {
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
            onBack(); // back to project selection
        }
    };

    const step = steps[currentStep];

    return (
      
        <div style={{
          
            position: 'absolute',
            top: 40,
            right: 40,
            width: 500,
            height: 350,  // smaller height
            backgroundColor: 'white',
            border: '2px solid #ccc',
            borderRadius: 16,
            padding: 24,
            zIndex: 1000,
            fontFamily: 'sans-serif',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            textAlign: 'center'
        }}>
          <button
    onClick={onExit}
    aria-label="Exit tutorial"
    style={{
        position: 'absolute',
        top: 10,
        right: 10,
        background: 'transparent',
        border: 'none',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#b57bff',
        cursor: 'pointer',
        userSelect: 'none',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: 16,
        transition: 'background-color 0.2s ease'
    }}
    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b57bff22'}
    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
>
    ×
</button>
            <h2 style={{ color: '#b57bff', marginBottom: 20 }}>{step.text}</h2>

            <div style={{
                position: 'relative',   // for absolute buttons
                width: '100%',
                height: 200,
                marginBottom: 20,
                //backgroundColor: '#f0f0f0',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
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
                        fontSize: 20,
                    }}
                    aria-label="Previous Step"
                >
                    ←
                </button>

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
                        fontSize: 20,
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
