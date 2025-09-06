import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

const exams = [
  { title: "TNBC", img: "https://tnpsc.academy/wp-content/uploads/2020/10/TNPSC-Logo-768x768.png", link: "#" },
  { title: "GATE", img: "https://eduxact.com/wp-content/uploads/2022/01/GATE-Eligibility.png", link: "#" },
  { title: "UPSC", img: "https://wallpaperaccess.com/full/9435303.jpg", link: "#" },
  { title: "CTET", img: "https://img.studydekho.com/uploads/c/2022/3/17631-c-whatsapp-image-2022-03-28-at-94428-pm.jpeg", link: "#" },
  { title: "SSC&GCL", img: "https://static.wixstatic.com/media/c47c84_8da6d920eebc4f88831a7fe7515c96d8~mv2.png/v1/fill/w_777,h_780,al_c,q_90,enc_auto/c47c84_8da6d920eebc4f88831a7fe7515c96d8~mv2.png", link: "#" },
  { title: "RRB", img: "https://tse4.mm.bing.net/th/id/OIP.-_DPLNmdrEj4epmWfDNQdQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", link: "#" },
];

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="main-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">LEARNX</h2>
        <div className="menu">
          <button type="button">📚 E-Books</button>
          <button type="button" onClick={() => navigate("/pqp")}>📄 P&QP</button>
          {/*  Navigate to QuizPage */}
          <button type="button" onClick={() => navigate("/quiz")}>⚡ Quiz</button>
          <button type="button">🤖 Ai</button>
          <button type="button" onClick={handleLogout}>⏻ Logout</button>
        </div>
      </aside>

      {/* Content */}
      <div className="content">
        <header className="header">
          <h2>EXAMS</h2>
          <button className="profile-btn" type="button">👤</button>
        </header>

        <div className="exam-grid">
          {exams.map((exam, index) => (
            <div key={index} className="exam-card">
              <img src={exam.img} alt={exam.title} />
              <h3>{exam.title}</h3>
              <a href={exam.link} className="open-btn">open</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
