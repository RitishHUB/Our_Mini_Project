import React, { useState, useRef } from "react";
import "./Upsc.css";

// ✅ UPSC Books / Study Material (placeholders)
const upscBooks = [
  {
    class: "Prelims – General Studies",
    subjects: [
      { title: "History of India", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Indian Polity", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Geography", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Economy", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Environment & Ecology", link: "https://drive.google.com/file/d/empty_link_id/preview" },
    ],
  },
  {
    class: "Prelims – CSAT / Aptitude",
    subjects: [
      { title: "Comprehension", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Logical Reasoning", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Basic Numeracy", link: "https://drive.google.com/file/d/empty_link_id/preview" },
    ],
  },
  {
    class: "Mains – Optional Subjects",
    subjects: [
      { title: "Political Science", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Public Administration", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Sociology", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "History", link: "https://drive.google.com/file/d/empty_link_id/preview" },
    ],
  },
];

// ✅ UPSC Syllabus
const syllabus = [
  { title: "History of India", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "Indian Polity", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "Geography", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "Economy", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "Environment & Ecology", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "CSAT / Aptitude", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "Optional Subjects", link: "https://drive.google.com/file/d/empty_link_id/preview" },
];

const Upsc = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const viewerRef = useRef(null);

  const handleOpen = (link) => {
    setSelectedLink(link);
    setTimeout(() => {
      viewerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  return (
    <div className="upsc-container">
      <h1 className="upsc-title">📚 UPSC Study Zone</h1>

      {/* Books Sections */}
      {upscBooks.map((group, i) => (
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
        <h2 className="class-title">📝 UPSC Syllabus</h2>
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
            title="UPSC PDF"
            className="pdf-frame"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Upsc;
