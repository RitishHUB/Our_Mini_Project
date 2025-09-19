import React from "react";

const Upsc = () => {
  return (
    <div className="books-container">
      <h1 className="books-title">📚 UPSC Study Material</h1>
      <div className="pdf-viewer">
        <iframe
          src="https://drive.google.com/file/d/1kVYSa5VJwv6QE7s4_ktS4CwOs1wE0RX7/preview"
          width="100%"
          height="600px"
          allow="autoplay"
          title="UPSC PDF"
          className="pdf-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Upsc;
