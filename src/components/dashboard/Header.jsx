import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">📘 LearnX</div>
      <input className="search-bar" type="text" placeholder="Search courses, topics..." />
      <div className="profile-menu">
        <span className="profile-icon">👤</span>
        <span className="profile-name">Hi, Ritish</span>
      </div>
    </header>
  );
};

export default Header;
