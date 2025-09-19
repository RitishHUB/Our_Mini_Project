import React from "react";

const Rrb = () => {
  return (
    <div className="books-container">
      <h1 className="books-title">📚 RRB Study Material</h1>
      <div className="pdf-viewer">
        <iframe
          src="https://drive.google.com/file/d/your_rrb_file_id/preview"
          width="100%"
          height="600px"
          allow="autoplay"
          title="RRB PDF"
          className="pdf-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Rrb;
