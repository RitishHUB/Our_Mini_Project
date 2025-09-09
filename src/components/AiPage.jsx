import React, { useState } from "react";
import "./AiPage.css";

export default function AiPage({ token, onLogout }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("http://localhost:5000/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : undefined
        },
        body: JSON.stringify({ prompt: question }),
      });

      
      let data;
      try {
        data = await res.json();
      } catch (err) {
        data = { answer: "Backend returned invalid response (HTML or error)" };
      }

      setAnswer(data.answer || " No response from AI");
      setQuestion("");
    } catch (err) {
      setAnswer(" Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="ai-container">
      <div className="header">
        <h2>🤖 Ask LearnX AI</h2>
        {onLogout && <button className="logout-btn" onClick={onLogout}>Logout</button>}
      </div>

      <textarea
        placeholder="Type your doubt..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={askAI} disabled={loading}>
        {loading ? "Thinking..." : "Ask"}
      </button>

      {answer && (
        <div className="ai-response">
          <strong>AI:</strong> {answer}
        </div>
      )}
    </div>
  );
}
