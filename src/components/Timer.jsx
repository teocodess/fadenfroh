import React, { useState } from 'react';

const Timer = ({onTimeUpdate}) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState(null); // To store the interval ID

  const startTimer = () => {
    if (!timer) { // Prevent multiple intervals
      const newTimer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
      setTimer(newTimer); // Store the interval ID
    }
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer); // Clear the interval
      setTimer(null);
      onTimeUpdate(minutes, seconds); // Reset the timer state
    }
  };

  const restartTimer = () => {
    stopTimer(); // Stop any ongoing timer
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <h1>{minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}</h1>
      <button type="button" onClick={startTimer}>Start</button>
      <button type="button" onClick={restartTimer}>Restart</button>
      <button type="button" onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
