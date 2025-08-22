import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ heading, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    let isTimerActive = timeRemaining > 0 && timeRemaining < targetTime*1000;

    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function resetTime(){
        setTimeRemaining(targetTime*1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining( prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={resetTime}/>
            <section className="challenge">
                <h2>{heading}</h2>
                <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <button onClick={isTimerActive ? handleStop : handleStart}>
                    {isTimerActive ? 'Stop' : 'Start '} Challenge
                </button>
                <p className={isTimerActive ? 'active' : undefined}>{isTimerActive ? 'Timer running..' : 'Timer Inactive'}</p>
            </section>
        </>
    );
}