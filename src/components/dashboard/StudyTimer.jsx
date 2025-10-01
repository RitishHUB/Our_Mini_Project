import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime(prev => prev - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false);
      const endTime = new Date().toLocaleTimeString();
      setSessionHistory(prev => [...prev, { duration: selectedPreset / 60, endTime }]);
      alert("Session complete! Great job 🎉");
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(selectedPreset);
  };

  const saveNote = () => {
    if (notes.trim()) {
      const timestamp = new Date().toLocaleTimeString();
      setSavedNotes([...savedNotes, { text: notes, time: timestamp }]);
      setNotes('');
    }
  };

  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');

  return (
    <section className="study-timer card">
      <h2 className="section-title">Focus Timer</h2>

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
      </div>

      <div className="timer-display">{minutes}:{seconds}</div>
      <div className="timer-controls">
        <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      <div className="notes-section">
        <h3>Session Notes 📝</h3>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Write down thoughts, distractions, or insights..."
        />
        <button onClick={saveNote}>Save Note</button>

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
