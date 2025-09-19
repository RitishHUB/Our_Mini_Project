import React from "react";

const Gate = () => {
  return (
    <div className="books-container">
      <h1 className="books-title">📚 GATE Study Material</h1>
      <div className="pdf-viewer">
        <iframe
          src="https://drive.google.com/file/d/1kAnrzP5KnifJ1o-Wl515kMQlA7JiNo0k/preview"
          width="100%"
          height="600px"
          allow="autoplay"
          title="GATE PDF"
          className="pdf-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Gate;
