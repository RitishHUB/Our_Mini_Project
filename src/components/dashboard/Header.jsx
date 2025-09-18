import React from 'react';
import { User } from 'lucide-react';

const Header = () => (
  <div className="header">
    <div className="profile-pic">
      <User size={28} />
    </div>
    <div className="welcome-text">
      <h1>Welcome back, Sarah! 👋</h1>
      <p>Ready to continue your learning journey?</p>
    </div>
  </div>
);

export default Header;
