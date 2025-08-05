import React, { useState } from 'react';
import paintStep2 from '../gifs/improve-project-step2.gif';
import paintStep3 from '../gifs/improve-project-step3.gif';
import paintStep4 from '../gifs/improve-project-step4.gif';

const steps = [
    {
        id: 1,
        text: 'Let\'s learn how to improve projects with Stax AI Q&A!',
        gif: 'https://png.pngtree.com/png-vector/20230509/ourmid/pngtree-improve-flat-icon-vector-png-image_7092632.png' // Replace with real URLs or local paths
    },
    {
        id: 2,
        text: 'We are going ask Stax AI to improve this project:',
        gif: paintStep2
    },
    {
        id: 3,
        text: 'Ask Q&A how we can improve this project.',
        gif: paintStep3
    },
    {
        id: 4,
        text: 'Stax AI suggests how we can improve our project!',
        gif: paintStep4
    },
      {
        id: 5,
        text: 'Try it yourself: Go to this project and ask Stax Q&A how to improve it.',
        code: 'https://stax.fun/editor?projectId=1023',
        gif: null
    }
];

const QAImproveProjectTutorial = ({ onBack, onExit}) => {
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
    <div style={{ textAlign: 'center' }}>
        <a
            href={step.code}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'inline-block',
                padding: '10px 16px',
                backgroundColor: '#b57bff',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
        >
            🔗 Help me Improve this Project
        </a>
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

export default QAImproveProjectTutorial;
