import React, { useState } from "react";
import "./QuizPage.css";
import sampleImg from "../assets/Group464.png";

const quizData = {
  TNPSC: [
    {
      question: "TNPSC stands for?",
      options: [
        "Tamil Nadu Public Service Commission",
        "National Service Commission",
        "Tamil Nadu Police Selection Commission",
        "None",
      ],
      answer: "Tamil Nadu Public Service Commission",
    },
    {
      question: "Which year TNPSC was established?",
      options: ["1929", "1950", "1972", "2000"],
      answer: "1929",
    },
  ],
  GATE: [
    {
      question: "GATE exam is mainly for?",
      options: ["Engineering & Science", "Medical", "Law", "Arts"],
      answer: "Engineering & Science",
    },
    {
      question: "GATE score is valid for?",
      options: ["1 year", "2 years", "3 years", "5 years"],
      answer: "3 years",
    },
  ],
  RRB: [
    {
      question: "RRB stands for?",
      options: [
        "Railway Recruitment Board",
        "Regional Road Board",
        "Rural Resource Board",
        "None",
      ],
      answer: "Railway Recruitment Board",
    },
    {
      question: "RRB exams are mainly for?",
      options: ["Bank Jobs", "Railway Jobs", "Police Jobs", "Teaching"],
      answer: "Railway Jobs",
    },
  ],
  UPSC: [
    {
      question: "UPSC stands for?",
      options: [
        "Union Public Service Commission",
        "United Public Service Council",
        "University PSC",
        "None",
      ],
      answer: "Union Public Service Commission",
    },
    {
      question: "UPSC Civil Services Exam is conducted for?",
      options: ["IAS, IPS, IFS", "Bank PO", "SSC", "Railways"],
      answer: "IAS, IPS, IFS",
    },
  ],
  CET: [
    {
      question: "CET stands for?",
      options: [
        "Common Entrance Test",
        "Central Education Test",
        "Competitive Exam Test",
        "None",
      ],
      answer: "Common Entrance Test",
    },
    {
      question: "CET is mainly conducted for?",
      options: [
        "Engineering, Medical, Management Admissions",
        "Railway Jobs",
        "Civil Services",
        "Teaching Exams",
      ],
      answer: "Engineering, Medical, Management Admissions",
    },
  ],
  "SSC CGL": [
    {
      question: "SSC CGL stands for?",
      options: [
        "Staff Selection Commission - Combined Graduate Level",
        "State Service Commission Graduate Level",
        "Senior Selection Council",
        "None",
      ],
      answer: "Staff Selection Commission - Combined Graduate Level",
    },
    {
      question: "SSC CGL exam is mainly for?",
      options: [
        "Group B & C posts in central government",
        "Railways only",
        "Banking only",
        "Police Services",
      ],
      answer: "Group B & C posts in central government",
    },
  ],
};

const QuizPage = () => {
  const [selectedExam, setSelectedExam] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = () => {
    if (selectedOption === quizData[selectedExam][current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < quizData[selectedExam].length) {
      setCurrent(current + 1);
      setSelectedOption(null);
    } else {
      setFinished(true);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelectedOption(null);
    }
  };

  const handleQuit = () => {
    setSelectedExam(null);
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelectedOption(null);
  };

  return (
    <div className="quiz-container">
      
      <header className="quiz-header">
        <img src={sampleImg} alt="learnX Logo" className="quiz-logo" />
        <h1>LEARNX QUIZ</h1>
      </header>

      {!selectedExam ? (
        <div className="exam-buttons">
          <h2>Choose Your Exam</h2>
          {Object.keys(quizData).map((exam) => (
            <button key={exam} onClick={() => setSelectedExam(exam)}>
              {exam}
            </button>
          ))}
        </div>
      ) : !finished ? (
        <div className="quiz-box">
          <h3>{quizData[selectedExam][current].question}</h3>
          <div className="options">
            {quizData[selectedExam][current].options.map((opt, i) => (
              <button
                key={i}
                className={selectedOption === opt ? "selected" : ""}
                onClick={() => setSelectedOption(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="nav-buttons">
            <button onClick={handlePrevious} disabled={current === 0}>
              ⬅ Previous
            </button>
            <button onClick={handleAnswer}>
              {current + 1 === quizData[selectedExam].length ? "Finish" : "Next ➡"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h2>
            ✅ {selectedExam} Quiz Finished! <br /> Score: {score}/
            {quizData[selectedExam].length}
          </h2>
          <button onClick={handleQuit}>🔄 Try Another Quiz</button>
        </div>
      )}

      {/* Quit Button (left) */}
      {selectedExam && !finished && (
        <div className="quiz-floating-btn" onClick={handleQuit}>
          ❌
        </div>
      )}
    </div>
  );
};

export default QuizPage;
