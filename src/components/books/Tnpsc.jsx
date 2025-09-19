import React, { useState } from "react";
import "./Tnpsc.css";

const tnpscBooks = [
  {
    title: "11th Maths",
    link: "https://drive.google.com/file/d/1C1LkVztftT-sxim0FtD1BQn6Wg6FBo8p/preview",
  },
  {
    title: "12th Maths",
    link: "https://drive.google.com/file/d/your_12thmaths_id/preview",
  },
  {
    title: "History",
    link: "https://drive.google.com/file/d/your_history_id/preview",
  },
  {
    title: "Geography",
    link: "https://drive.google.com/file/d/your_geography_id/preview",
  },
];

const Tnpsc = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="tnpsc-container">
      <h1 className="tnpsc-title">📚 TNPSC Study Materials</h1>

      <div className="book-list">
        {tnpscBooks.map((book, index) => (
          <div key={index} className="book-item">
            <span className="book-name">{book.title}</span>
            <button
              className="open-btn"
              onClick={() => setSelectedBook(book.link)}
            >
              Open
            </button>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="pdf-viewer">
          <iframe
            src={selectedBook}
            width="100%"
            height="600px"
            allow="autoplay"
            title="TNPSC Book"
            className="pdf-frame"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Tnpsc;
