import React, { useEffect } from "react";
import "./QuizResult.css";

const QuizResult = ({ domain, score, total, resetQuiz }) => {
  const percentage = Math.round((score / total) * 100);
  let message = "";

  if (percentage >= 80) message = "🏆 Excellent Work!";
  else if (percentage >= 50) message = "👍 Good Job, Keep Practicing!";
  else message = "📖 Needs Improvement, Try Again!";

  // 🎉 Auto trigger confetti animation
  useEffect(() => {
    const confettiContainer = document.querySelector(".confetti");
    if (confettiContainer) {
      confettiContainer.innerHTML = ""; // reset
      for (let i = 0; i < 50; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDuration = 2 + Math.random() * 3 + "s";
        piece.style.backgroundColor =
          ["#00ff99", "#00cc66", "#aaffaa", "#ffffff"][
            Math.floor(Math.random() * 4)
          ];
        confettiContainer.appendChild(piece);
      }
    }
  }, []);

  return (
    <div className="quiz-result-page">
      <div className="confetti"></div>

      <div className="quiz-result-container">
        <h2>🎉 {domain} Quiz Completed!</h2>
        <p>
          Your Score: <strong>{score}</strong> / {total}
        </p>
        <p>Percentage: {percentage}%</p>
        <p className="result-message">{message}</p>
        <button className="retry-btn" onClick={resetQuiz}>
          🔄 Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
