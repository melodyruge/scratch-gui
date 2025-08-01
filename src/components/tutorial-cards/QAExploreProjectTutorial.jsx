import React, { useState } from 'react';
import paintStep2 from '../gifs/explore-project-step2.gif';
import paintStep3 from '../gifs/explore-project-step3.gif';
import paintStep4 from '../gifs/explore-project-step4.gif';
import paintStep5 from '../gifs/QA-paint-program-step5.gif';
import paintStep6 from '../gifs/QA-paint-program-step6.gif';
import paintStep7 from '../gifs/QA-paint-program-step7.gif';

const steps = [
    {
        id: 1,
        text: 'Let\'s learn how to explore projects with Stax AI Q&A!',
        gif: 'https://www.freeiconspng.com/uploads/find-icon-7.png' // Replace with real URLs or local paths
    },
    {
        id: 2,
        text: 'We are going ask Stax explore this project:',
        gif: paintStep2
    },
    {
        id: 3,
        text: 'Ask Q&A how this project was made.',
        gif: paintStep3
    },
    {
        id: 4,
        text: 'StaxAI shows how the game was made. Now we can make our own game using this info!',
        gif: paintStep4
    },
      {
        id: 5,
        text: 'Try it yourself: Go to this project and ask Stax Q&A how it was made:',
        code: 'https://stax.fun/editor?projectId=1000',
        gif: null
    }
];

const QAExploreProjectTutorial = ({ onBack, onExit}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const [copied, setCopied] = useState(false);


    const handleNext = () => {
        if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentStep > 0) setCurrentStep(prev => prev - 1);
        else onBack();
    };

    const step = steps[currentStep];

    return (
        <div style={{
            position: 'absolute',
            top: 40,
            right: 40,
            width: 540,
            height: 320, // Shortened height
            backgroundColor: 'white',
            border: '2px solid #ccc',
            borderRadius: 16,
            padding: 24,
            zIndex: 1000,
            fontFamily: 'sans-serif',
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
    margin: '-24px -24px 16px -24px' // overlaps padding
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
                    backgroundColor: index === currentStep ? 'white' : '#ffffff66',
                    //transition: 'background-color 0.3s'
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


            {/* Step Text */}
            <h2 style={{ color: '#b57bff', fontSize: 16, marginBottom: 12 }}>{step.text}</h2>

            {/* Content area with center arrows */}
            <div style={{
                position: 'relative',
                width: '100%',
                height: 160,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f9f9f9',
                borderRadius: 12
            }}>
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    style={{
                        position: 'absolute',
                        left: -20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: '#b57bff',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: 20,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}
                >
                    ←
                </button>

                {/* Center Content */}
                {step.code ? (
<div style={{ width: '90%', position: 'relative' }}>
    <textarea
        value={step.code}
        readOnly
        style={{
            width: '100%',
            height: '100px',
            padding: '10px',
            fontSize: '14px',
            fontFamily: 'monospace',
            border: '1px solid #ccc',
            borderRadius: '8px',
            resize: 'none',
            backgroundColor: '#f9f9f9'
        }}
        onFocus={e => e.target.select()}
    />
    <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '8px'
    }}>
        <button
            onClick={() => {
                navigator.clipboard.writeText(step.code);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            }}
            style={{
                padding: '6px 12px',
                fontSize: 12,
                backgroundColor: '#b57bff',
                color: 'white',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}
        >
            {copied ? '✔ Copied!' : '📋 Copy'}
        </button>
    </div>
</div>


                ) : (
                    <img
                        src={step.gif}
                        alt={`Step ${step.id}`}
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            borderRadius: 8
                        }}
                    />
                )}

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    disabled={currentStep === steps.length - 1}
                    style={{
                        position: 'absolute',
                        right: -20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: currentStep === steps.length - 1 ? '#ccc' : '#b57bff',
                        color: 'white',
                        border: 'none',
                        cursor: currentStep === steps.length - 1 ? 'default' : 'pointer',
                        fontSize: 20,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default QAExploreProjectTutorial;
