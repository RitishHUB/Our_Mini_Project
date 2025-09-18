import React from 'react';
import Header from './Header';
import ProgressOverview from './ProgressOverview';
import ActiveCourses from './ActiveCourses';
import QuickActions from './QuickActions';
import Achievements from './Achievements';
import FooterTip from './FooterTip';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data
  const userStats = { streak: 5, overallProgress: 40 };
  const courses = [
    { id: 1, title: "JavaScript Basics", progress: 65, nextLesson: "Variables & Data Types" },
    { id: 2, title: "HTML & CSS", progress: 80, nextLesson: "CSS Flexbox" },
    { id: 3, title: "React Fundamentals", progress: 25, nextLesson: "Components Introduction" }
  ];
  const badges = [
    { id: 1, name: "First Steps", icon: "🎯", earned: true },
    { id: 2, name: "5 Day Streak", icon: "🔥", earned: true },
    { id: 3, name: "Quiz Master", icon: "🧠", earned: false },
    { id: 4, name: "Course Complete", icon: "🏆", earned: false }
  ];
  const motivationalTips = [
    "Learning a little bit each day adds up to big results! 🌟",
    "Every expert was once a beginner. Keep going! 💪",
    "Consistency is the key to mastering any skill. You've got this! ✨"
  ];
  const randomTip = motivationalTips[Math.floor(Math.random() * motivationalTips.length)];

  return (
    <div className="dashboard">
      <div className="container">
        <Header />
        <ProgressOverview userStats={userStats} />
        <ActiveCourses courses={courses} />
        <QuickActions />
        <Achievements badges={badges} />
        <FooterTip tip={randomTip} />
      </div>
    </div>
  );
};

export default Dashboard;
