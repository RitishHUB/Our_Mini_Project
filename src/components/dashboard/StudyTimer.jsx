import React, { useState, useEffect } from 'react';
import './StudyTimer.css';

const presets = [
  { label: 'Pomodoro (25 min)', value: 25 * 60 },
  { label: 'Deep Work (50 min)', value: 50 * 60 },
  { label: 'Marathon (90 min)', value: 90 * 60 }
];

const StudyTimer = () => {
  const [time, setTime] = useState(presets[0].value);
  const [isRunning, setIsRunning] = useState(false);
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);
  const [sessionHistory, setSessionHistory] = useState([]);
  const [selectedPreset, setSelectedPreset] = useState(presets[0].value);
  const [darkMode, setDarkMode] = useState(false);
  const [customTime, setCustomTime] = useState('');

  // Timer effect
  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime(prev => prev - 1), 1000);
    } else if (time === 0 && isRunning) {
      endSession();
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(selectedPreset);
  };

  const saveNote = (noteText) => {
    if (noteText.trim()) {
      const timestamp = new Date().toLocaleTimeString();
      setSavedNotes(prev => [...prev, { text: noteText, time: timestamp }]);
    }
  };

  const endSession = () => {
    setIsRunning(false);
    const endTime = new Date().toLocaleTimeString();
    setSessionHistory(prev => [...prev, { duration: selectedPreset / 60, endTime }]);
    saveNote(notes); // auto-save notes
    setNotes('');
    playSound();
    alert("Session complete! Great job 🎉");
    setTime(selectedPreset);
  };

  const playSound = () => {
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-3.mp3');
    audio.play();
  };

  const handleCustomTime = () => {
    const seconds = parseInt(customTime, 10) * 60;
    if (!isNaN(seconds) && seconds > 0) {
      setSelectedPreset(seconds);
      setTime(seconds);
      setIsRunning(false);
      setCustomTime('');
    }
  };

  const clearHistory = () => setSessionHistory([]);
  const clearNotes = () => setSavedNotes([]);

  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  const progressPercent = ((selectedPreset - time) / selectedPreset) * 100;

  return (
    <section className={`study-timer card ${darkMode ? 'dark' : ''}`}>
      <h2 className="section-title">Focus Timer ⏱️</h2>

      <div className="top-controls">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="preset-selector">
        {presets.map((preset, idx) => (
          <button
            key={idx}
            className={`preset-btn ${selectedPreset === preset.value ? 'active' : ''}`}
            onClick={() => {
              setSelectedPreset(preset.value);
              setTime(preset.value);
              setIsRunning(false);
            }}
          >
            {preset.label}
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom (min)"
          value={customTime}
          onChange={e => setCustomTime(e.target.value)}
        />
        <button onClick={handleCustomTime}>Set</button>
      </div>

      <div className="timer-display">{minutes}:{seconds}</div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="timer-controls">
        <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={endSession}>End Session</button>
      </div>

      <div className="notes-section">
        <h3>Session Notes 📝</h3>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Write thoughts, distractions, or insights..."
        />
        <button onClick={() => saveNote(notes)}>Save Note</button>
        <button onClick={clearNotes}>Clear Notes</button>

        {savedNotes.length > 0 && (
          <div className="saved-notes">
            <h4>Saved Notes</h4>
            <ul>
              {savedNotes.map((note, idx) => (
                <li key={idx}>
                  <strong>{note.time}:</strong> {note.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {sessionHistory.length > 0 && (
        <div className="session-history">
          <h4>Session History</h4>
          <button onClick={clearHistory}>Clear History</button>
          <ul>
            {sessionHistory.map((session, idx) => (
              <li key={idx}>
                ✅ {session.duration} min session ended at {session.endTime}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default StudyTimer;
