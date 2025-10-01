import React, { useState, useEffect } from 'react';
// import './FocusTimer.css';

const FocusTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes default
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime(prev => prev - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false);
      alert('Time is up! Take a short break. 🌟');
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => setTime(25 * 60);

  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');

  return (
    <div className="focus-timer card">
      <h2 className="section-title">Focus Timer ⏱️</h2>
      <div className="timer-display">{minutes}:{seconds}</div>
      <div className="timer-controls">
        <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default FocusTimer;
