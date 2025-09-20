import React, { useState } from "react";
import QuizDomain from "./QuizDomain";
import QuizPage from "./QuizPage";
import QuizResult from "./QuizResult";
import quizData from "./quizData";
import "./MainQuiz.css";

const MainQuiz = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const startQuiz = (domain) => {
    setSelectedDomain(domain);
    setScore(0);
    setShowResult(false);
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedDomain(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="main-quiz-container">
      {!selectedDomain ? (
        <QuizDomain startQuiz={startQuiz} />
      ) : showResult ? (
        <QuizResult
          domain={selectedDomain}
          score={score}
          total={quizData[selectedDomain].length}
          resetQuiz={resetQuiz}
        />
      ) : (
        <QuizPage
          quiz={quizData[selectedDomain]}
          finishQuiz={finishQuiz}
        />
      )}
    </div>
  );
};

export default MainQuiz;
