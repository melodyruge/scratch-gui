import React, { useState } from 'react';
import paintStep1 from '../gifs/roast-project-step2.gif';
import paintStep2 from '../gifs/roast-project-step3.gif';
import paintStep3 from '../gifs/roast-project-step4.gif';
import paintStep4 from '../gifs/roast-project-step5.gif';

const steps = [
    {
        id: 1,
        text: 'Let\'s learn how to import and roast projects with Stax AI Q&A!',
        gif: 'https://images.vexels.com/media/users/3/146887/isolated/preview/41faeb4b7129b75f4883d75c72627835-fire-flame-clipart.png' // Replace with real URLs or local paths
    },
    {
        id: 2,
        text: 'This is the project we will be importing and roasting:',
        gif: paintStep1
    },
    {
        id: 3,
        text: 'Go to your Scratch project and paste the project link in Stax import text box.',
        gif: paintStep2
    },
    {
        id: 4,
        text: 'Once the project is imported, ask Q&A to brutally roast the project.',
        gif: paintStep3
    },
    {
        id: 5,
        text: 'Brutal roast by StaxAI!',
        gif: paintStep4
    },
      {
        id: 6,
        text: 'Try it yourself: Import this project and ask Stax Q&A to roast it!',
        code: 'https://scratch.mit.edu/projects/1203184409',
        gif: null
    }
];

const QARoastProjectTutorial = ({ onBack, onExit}) => {
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
            🔗 Open Project
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

export default QARoastProjectTutorial;
