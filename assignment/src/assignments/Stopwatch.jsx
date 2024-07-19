import React, { useState, useRef } from 'react';
import './Stopwatch.css'; 

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (intervalRef.current !== null) return;

        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 10);
        }, 10);

        setIsRunning(true);
    };

    const stopTimer = () => {
        if (intervalRef.current === null) return;

        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const hours = Math.floor(time / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
    };

    return (
        <div className="stopwatch-container">
            <h1>Stopwatch</h1>
            <div className="stopwatch-display">{formatTime(time)}</div>
            <div className="button-container">
                {!isRunning ?
                    <button onClick={startTimer}><i class="bi bi-play-fill h2"></i></button> :
                    <button onClick={stopTimer}><i class="bi bi-stop-fill h2"></i></button>
                }
                <button onClick={resetTimer}><i class="bi bi-alarm h2"></i></button>
            </div>
        </div>
    );
};

export default Stopwatch;
