import React, { useState, useRef } from "react";
import "./Gate.css";

// ✅ GATE Books / Study Material (placeholders)
const gateBooks = [
  {
    class: "Engineering Mathematics",
    subjects: [
      { title: "Linear Algebra", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Calculus", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Probability & Statistics", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Complex Analysis", link: "https://drive.google.com/file/d/empty_link_id/preview" },
    ],
  },
  {
    class: "General Aptitude",
    subjects: [
      { title: "Verbal Ability", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Quantitative Aptitude", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Logical Reasoning", link: "https://drive.google.com/file/d/empty_link_id/preview" },
    ],
  },
  {
    class: "Technical Subjects",
    subjects: [
      { title: "Computer Science & IT", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Electronics & Communication", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Mechanical Engineering", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Electrical Engineering", link: "https://drive.google.com/file/d/empty_link_id/preview" },
    ],
  },
];

// ✅ GATE Syllabus
const syllabus = [
  { title: "Engineering Mathematics", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "General Aptitude", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "Computer Science & IT", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "Electronics & Communication", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "Mechanical Engineering", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "Electrical Engineering", link: "https://drive.google.com/file/d/empty_link_id/preview" },
];

const Gate = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const viewerRef = useRef(null);

  const handleOpen = (link) => {
    setSelectedLink(link);
    setTimeout(() => {
      viewerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  return (
    <div className="gate-container">
      <h1 className="gate-title">📚 GATE Study Zone</h1>

      {/* Books Sections */}
      {gateBooks.map((group, i) => (
        <div key={i} className="class-section">
          <h2 className="class-title">{group.class}</h2>
          <div className="book-grid">
            {group.subjects.map((book, index) => (
              <div key={index} className="book-card">
                <h3 className="book-name">{book.title}</h3>
                <button className="open-btn" onClick={() => handleOpen(book.link)}>
                  Open Book
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Syllabus Section */}
      <div className="syllabus-section">
        <h2 className="class-title">📝 GATE Syllabus</h2>
        <div className="book-grid">
          {syllabus.map((item, idx) => (
            <div key={idx} className="book-card">
              <h3 className="book-name">{item.title}</h3>
              <button className="open-btn" onClick={() => handleOpen(item.link)}>
                Open Syllabus
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer */}
      {selectedLink && (
        <div className="pdf-section" ref={viewerRef}>
          <h2 className="viewer-title">📖 PDF Viewer</h2>
          <iframe
            src={selectedLink}
            width="100%"
            height="600px"
            allow="autoplay"
            title="GATE PDF"
            className="pdf-frame"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Gate;
