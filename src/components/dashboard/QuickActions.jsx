import React from 'react';
import { Zap, Play, Trophy, MessageSquare } from 'lucide-react';

const QuickActions = () => (
  <div className="quick-actions">
    <h2 className="section-title"><Zap size={24} /> Quick Actions</h2>
    <div className="actions-grid">
      <button className="action-btn">
        <div className="action-icon"><Play size={28} /></div>
        Start Lesson
      </button>
      <button className="action-btn">
        <div className="action-icon"><Trophy size={28} /></div>
        Take Quiz
      </button>
      <button className="action-btn">
        <div className="action-icon"><MessageSquare size={28} /></div>
        Ask AI Tutor
      </button>
    </div>
  </div>
);

export default QuickActions;
