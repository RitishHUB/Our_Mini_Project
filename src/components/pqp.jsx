import React from "react";
import "./pqp.css";

const exams = [
  { title: "TNBC", img: "https://tnpsc.academy/wp-content/uploads/2020/10/TNPSC-Logo-768x768.png", qp1: "QP-1--2022", qp2: "QP-2--2023" },
  { title: "GATE", img: "https://eduxact.com/wp-content/uploads/2022/01/GATE-Eligibility.png", qp1: "QP-1--2022", qp2: "QP-2--2023" },
  { title: "UPSC", img: "https://wallpaperaccess.com/full/9435303.jpg", qp1: "QP-1--2022", qp2: "QP-2--2023" },
  { title: "CTET", img: "https://img.studydekho.com/uploads/c/2022/3/17631-c-whatsapp-image-2022-03-28-at-94428-pm.jpeg", qp1: "QP-1--2022", qp2: "QP-2--2023" },
  { title: "SSC&GCL", img: "https://static.wixstatic.com/media/c47c84_8da6d920eebc4f88831a7fe7515c96d8~mv2.png/v1/fill/w_777,h_780,al_c,q_90,enc_auto/c47c84_8da6d920eebc4f88831a7fe7515c96d8~mv2.png", qp1: "QP-1--2022", qp2: "QP-2--2023" },
  { title: "RRB", img: "https://tse4.mm.bing.net/th/id/OIP.-_DPLNmdrEj4epmWfDNQdQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", qp1: "QP-1--2022", qp2: "QP-2--2023" },
];

const Pqp = () => {
  return (
    <div className="pqp-container">
      <header className="pqp-header">
        <h2>P&amp;QP</h2>
        <button className="profile-btn" type="button">👤</button>
      </header>

      <div className="pqp-grid">
        {exams.map((exam, index) => (
          <div key={index} className="pqp-card">
            <img src={exam.img} alt={exam.title} />
            <h3>{exam.title}</h3>
            <p>{exam.qp1}</p>
            <p>{exam.qp2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pqp;
