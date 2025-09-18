import React from 'react';
import { Target } from 'lucide-react';

const ProgressOverview = ({ userStats }) => (
  <div className="progress-section">
    <h2 className="section-title">
      <Target size={24} /> Your Progress
    </h2>
    <div className="progress-overview">
      <div className="progress-card">
        <div className="progress-value">{userStats.streak}</div>
        <div className="progress-label">Days in a Row! 🔥</div>
      </div>
      <div className="progress-card overall-progress">
        <div className="progress-value">{userStats.overallProgress}%</div>
        <div className="progress-label">Course Completed 🎯</div>
      </div>
    </div>
  </div>
);

export default ProgressOverview;
