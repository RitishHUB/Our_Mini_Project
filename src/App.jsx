import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import MainPage from "./components/MainPage.jsx";
import Pqp from "./components/pqp.jsx";
import QuizPage from "./components/QuizPage.jsx";
import Books from "./components/Books.jsx";
import AiPage from "./components/AiPage.jsx"; 
import Profil from "./components/dashboard/Dashboard.jsx";  // ✅ Import Profile page

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/pqp" element={<Pqp />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/books/:examName" element={<Books />} />
        <Route path="/ai" element={<AiPage />} />
        <Route path="/profile" element={<Profil />} /> {/* ✅ Profile route */}
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

