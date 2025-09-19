import React from "react";

const Ctet = () => {
  return (
    <div className="books-container">
      <h1 className="books-title">📚 CTET Study Material</h1>
      <div className="pdf-viewer">
        <iframe
          src="https://drive.google.com/file/d/your_ctet_file_id/preview"
          width="100%"
          height="600px"
          allow="autoplay"
          title="CTET PDF"
          className="pdf-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Ctet;
