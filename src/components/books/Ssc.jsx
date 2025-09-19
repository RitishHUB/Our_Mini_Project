import React from "react";

const Ssc = () => {
  return (
    <div className="books-container">
      <h1 className="books-title">📚 SSC Study Material</h1>
      <div className="pdf-viewer">
        <iframe
          src="https://drive.google.com/file/d/your_ssc_file_id/preview"
          width="100%"
          height="600px"
          allow="autoplay"
          title="SSC PDF"
          className="pdf-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Ssc;
