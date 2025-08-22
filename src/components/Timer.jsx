import React, { useState, useEffect } from 'react'

function Timer() {

    const [secondsLeft, setSecondsLeft] = useState(30);
    const [isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        let timerId;
        if(isRunning && secondsLeft > 0){
            timerId = setInterval(() => {
                setSecondsLeft(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else if (secondsLeft === 0 ){
            setIsRunning(false);
        }
        return () => clearInterval(timerId);

    },[isRunning, secondsLeft]);

    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setSecondsLeft(30);
    };

  return (
    <div>
        <h1>{secondsLeft}</h1>
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={pauseTimer} disabled={isRunning}>pause</button>
        <button onClick={resetTimer} disabled={isRunning}>reset</button>
    </div>
  )
}

export default Timer