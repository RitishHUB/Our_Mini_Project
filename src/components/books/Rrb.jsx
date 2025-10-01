import React, { useState, useRef } from "react";
import "./Rrb.css";

// ✅ RRB Books / Study Material (example placeholders)
const rrbBooks = [
  {
    class: "RRB Mathematics",
    subjects: [
      { title: "Number Systems & Arithmetic", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Algebra & Geometry Basics", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Profit, Loss & Interest", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Time, Work & Speed", link: "https://drive.google.com/file/d/empty_link_id/preview" },
    ],
  },
  {
    class: "RRB General Intelligence & Reasoning",
    subjects: [
      { title: "Series & Analogies", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Coding-Decoding", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Blood Relations & Directions", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Puzzles & Syllogism", link: "https://drive.google.com/file/d/empty_link_id/preview" },
    ],
  },
  {
    class: "RRB General Awareness",
    subjects: [
      { title: "Indian History & Geography", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Polity & Economy", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Science & Technology Basics", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Sports & Awards", link: "https://drive.google.com/file/d/empty_link_id/preview" },
    ],
  },
  {
    class: "RRB Computer Knowledge",
    subjects: [
      { title: "Basics of Computers", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "MS Office & Internet", link: "https://drive.google.com/file/d/empty_link_id/preview" },
      { title: "Shortcut Keys & Software", link: "https://drive.google.com/file/d/empty_link_id/preview" },
    ],
  },
];

// ✅ RRB Syllabus
const syllabus = [
  { title: "Mathematics", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "General Intelligence & Reasoning", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "General Awareness", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "General Science", link: "https://drive.google.com/file/d/empty_link_id/preview" },
  { title: "Computer Knowledge", link: "https://drive.google.com/file/d/empty_link_id/preview" },
];

const Rrb = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const viewerRef = useRef(null);

  const handleOpen = (link) => {
    setSelectedLink(link);
    setTimeout(() => {
      viewerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  return (
    <div className="rrb-container">
      <h1 className="rrb-title">📚 RRB Study Zone</h1>

      {/* Books Sections */}
      {rrbBooks.map((group, i) => (
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
        <h2 className="class-title">📝 RRB Syllabus</h2>
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
            title="RRB PDF"
            className="pdf-frame"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Rrb;
