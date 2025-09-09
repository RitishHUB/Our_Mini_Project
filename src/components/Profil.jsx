import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profil.css";

const Profil = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <h1>My Profile</h1>

      
      <button 
        className="home-btn" 
        onClick={() => navigate("/main")}   // ✅ go back to MainPage
      >
        ⬅ Return to Home
      </button>
    </div>
  );
};

export default Profil;
