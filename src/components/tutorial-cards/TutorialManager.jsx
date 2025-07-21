import React, { useState } from 'react';
import WelcomeCard from './WelcomeCard';
import AiTutorialCard from './AiTutorialCard';
import ProjectSelectionCard from './ProjectSelectionCard';
import ChaseGhostTutorial from './ChaseGhostTutorial';
import PaintProgramTutorial from './PaintProgramTutorial';

const TutorialManager = () => {
    const [step, setStep] = useState(1);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [visible, setVisible] = useState(true); // optional if you want to hide all tutorial

    const handleSelectLevel = (level) => {
        setSelectedLevel(level);
        if (level === 'moderate' || level === 'frequent') {
            setStep(2);
        } else {
            if (typeof window.startCustomTutorial === 'function') {
                window.startCustomTutorial('beginner-tutorial');
            }
        }
    };

    const startCodeTutorial = () => {
        setStep(3);
    };

    const startQaTutorial = () => {
        if (typeof window.startCustomTutorial === 'function') {
            window.startCustomTutorial('qa-tutorial');
        }
    };

    const handleProjectSelect = (projectId) => {
        if (typeof window.startCustomTutorial === 'function') {
            window.startCustomTutorial(projectId);
        }
        if (projectId === 'chase-ghost') {
            setStep(4); // Load your internal multi-step Chase Ghost tutorial
        } 
        if (projectId === 'paint-program') {
            setStep(5); // Load your internal multi-step Paint Program tutorial
        } 
        else {
            if (typeof window.startCustomTutorial === 'function') {
                window.startCustomTutorial(projectId);
            }
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    // <-- ADD THIS FUNCTION -->
    const handleExit = () => {
        // Example: Hide tutorial entirely or reset step
        setVisible(false);
        // Or if you want to go back to welcome screen, uncomment below:
        // setStep(1);
    };

    if (!visible) return null; // hide tutorial if exited

    switch (step) {
        case 1:
            return <WelcomeCard selectedLevel={selectedLevel} onSelectLevel={handleSelectLevel} />;
        case 2:
            return <AiTutorialCard onClickCode={startCodeTutorial} onClickQA={startQaTutorial} onBack={handleBack} />;
        case 3:
            return <ProjectSelectionCard onSelectProject={handleProjectSelect} onBack={handleBack} />;
        case 4:
            return <ChaseGhostTutorial onBack={handleBack} onExit={handleExit} />;
        case 5: 
            return <PaintProgramTutorial on Back={handleBack} onExit={handleExit} />;
        default:
            return null;
    }
};

export default TutorialManager;
