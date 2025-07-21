import React, { useState } from 'react';
import paintStep3 from '../gifs/paint-program-step3.gif';
import paintStep4 from '../gifs/paint-program-step4.gif';
import paintStep5 from '../gifs/paint-program-step5.gif';
import paintStep8 from '../gifs/paint-program-step8.gif';

const steps = [
    {
        id: 1,
        text: 'Let\'s make a paint program! At the end you can try the prompt too!',
        gif: 'https://img.freepik.com/free-vector/paint-brushes-color-palette_1308-127912.jpg?semt=ais_hybrid&w=740' // Replace with real URLs or local paths
    },
    {
        id: 2,
        text: 'The Code tab lets you use Stax AI to generate simple code. Craft a simple prompt and hit send:',
        gif: paintStep3
    },
    {
        id: 3,
        text: 'Once loaded, code blocks are in the work space. Press the flag to play!',
        gif: paintStep4
    },
        {
        id: 4,
        text: 'Try it yourself: Copy the prompt into your own Code Tab:',
        gif: paintStep8
    },
    {
      id: 5,
      text: 'Share your first Stax game! On the top right, click the publish button, and save with your project name.',
      gif: paintStep5 
    },
    {
      id: 6,
      text: 'Congrats! You have now made and shared your first game. Use Code tab to create your own game!',
      gif: paintStep3
    }
];

const PaintProgramTutorial = ({ onBack, onExit}) => {
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

                <img src={step.gif} alt={`Step ${step.id}`} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 8 }} />

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

export default PaintProgramTutorial;
