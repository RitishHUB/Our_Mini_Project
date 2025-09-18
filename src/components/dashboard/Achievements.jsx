import React from 'react';
import { Award } from 'lucide-react';

const Achievements = ({ badges }) => (
  <div className="badges-section">
    <h2 className="section-title"><Award size={24} /> Your Achievements</h2>
    <div className="badges-grid">
      {badges.map(badge => (
        <div key={badge.id} className={`badge ${badge.earned ? 'earned' : ''}`}>
          <div className="badge-icon">{badge.icon}</div>
          <div className="badge-name">{badge.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Achievements;
