import React, { useState } from 'react';
import WelcomeCard from './WelcomeCard';
import AiTutorialCard from './AiTutorialCard';
import ProjectSelectionCard from './ProjectSelectionCard';
import ChaseGhostTutorial from './ChaseGhostTutorial';
import PaintProgramTutorial from './PaintProgramTutorial';
import IntroStax from './IntroStax';
import QAProjectSelection from './QAProjectSelection';
import QAPaintProgramTutorial from './QAPaintProgramTutorial';

const TutorialManager = () => {
    const [step, setStep] = useState(1);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [visible, setVisible] = useState(true);

    const handleSelectLevel = (level) => {
        setSelectedLevel(level);
        if (level === 'moderate' || level === 'frequent') {
            setStep(2); // Go to AI tutorial
        } else if (level === 'never' || level === 'couple') {
            setStep(0); // Go to IntroStax
        }
    };

    const startCodeTutorial = () => {
        setStep(3);
    };

    const startQaTutorial = () => {
        setStep(6);
    };

    const handleProjectSelect = (projectId) => {
        if (typeof window.startCustomTutorial === 'function') {
            window.startCustomTutorial(projectId);
        }
        if (projectId === 'chase-ghost') {
            setStep(4); // Chase Ghost tutorial
        } else if (projectId === 'paint-program') {
            setStep(5); // Paint Program tutorial
        }
    };

    const handleQaProjectSelect = (projectId) => {
        if (projectId === 'qa-paint-program') {
            setStep(7); // QA Paint Project Tutorial
        }
    };

    const handleBack = () => {
        switch (step) {
            case 0:
                setStep(1); // IntroStax -> Welcome
                break;
            case 2:
                setStep(1); // AiTutorialCard -> Welcome
                break;
            case 3:
                setStep(2); // ProjectSelectionCard -> AiTutorialCard
                break;
            case 4:
            case 5:
                setStep(3); // Game tutorials -> ProjectSelectionCard
                break;
            case 6:
                setStep(2); // QAProjectSelection -> AiTutorialCard
                break;
            case 7:
                setStep(6); // QAPaintProjectTutorial -> QAProjectSelection
                break;
            default:
                break;
        }
    };

    const handleExit = () => {
        setVisible(false);
    };

    if (!visible) return null;

    switch (step) {
        case 0:
            return <IntroStax onBack={handleBack} onExit={handleExit} onGoToAITutorial={() => setStep(2)} />;
        case 1:
            return <WelcomeCard selectedLevel={selectedLevel} onSelectLevel={handleSelectLevel} />;
        case 2:
            return <AiTutorialCard onClickCode={startCodeTutorial} onClickQA={startQaTutorial} onBack={handleBack} />;
        case 3:
            return <ProjectSelectionCard onSelectProject={handleProjectSelect} onBack={handleBack} />;
        case 4:
            return <ChaseGhostTutorial onBack={handleBack} onExit={handleExit} />;
        case 5:
            return <PaintProgramTutorial onBack={handleBack} onExit={handleExit} />;
        case 6:
            return (
                <QAProjectSelection
                    onBack={handleBack}
                    onExit={handleExit}
                    onSelectProject={handleQaProjectSelect}
                />
            );
        case 7:
            return <QAPaintProgramTutorial onBack={handleBack} onExit={handleExit} />;
        default:
            return null;
    }
};

export default TutorialManager;
