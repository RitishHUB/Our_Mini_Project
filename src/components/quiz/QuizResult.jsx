import React from "react";
import "./QuizResult.css";

const QuizResult = ({ domain, score, total, resetQuiz }) => {
  const percentage = Math.round((score / total) * 100);
  let message = "";

  if (percentage >= 80) message = "🏆 Excellent Work!";
  else if (percentage >= 50) message = "👍 Good Job, Keep Practicing!";
  else message = "📖 Needs Improvement, Try Again!";

  return (
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
  );
};

export default QuizResult;
