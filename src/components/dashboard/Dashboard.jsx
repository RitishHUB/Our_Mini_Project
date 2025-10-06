import React from 'react';
import Header from './Header';
import ProgressOverview from './ProgressOverview';
import ActiveCourses from './ActiveCourses';
import StudyTimer from './StudyTimer';
import Achievements from './Achievements';
import CalendarHeatmap from './CalendarHeatmap';
import QuickActions from './QuickActions';
import FooterTip from './FooterTip';
import StudyChart from './StudyChart';
import './Dashboard.css';

const Dashboard = () => {
  const userStats = {
    streak: 7,
    progress: 65,
    message: "Keep up the momentum! You're doing great. 🌟"
  };

 const courses = [
  { title: "UPSC Civil Services", progress: 65, nextLesson: "Indian Polity – Fundamental Rights" },
  { title: "TNPSC", progress: 40, nextLesson: "History of Tamil Nadu – Sangam Age" },
  { title: "SSC CGL", progress: 55, nextLesson: "Quantitative Aptitude – Number Systems" },
  { title: "RRB NTPC", progress: 30, nextLesson: "General Awareness – Indian Economy" },
  { title: "CTET", progress: 20, nextLesson: "Child Development & Pedagogy – Learning Theories" }
];

  const badges = [
    { name: "Streak Master", icon: "🔥", earned: true },
    { name: "Quiz Champ", icon: "🧠", earned: false },
    { name: "Course Finisher", icon: "🏆", earned: true }
  ];

  const dailyTip = "Learning is a journey, not a race. Stay consistent and curious! ✨";

  return (
    <div className="dashboard">
      <Header />
      <ProgressOverview stats={userStats} />
      <ActiveCourses courses={courses} />
      <StudyTimer />
      <Achievements badges={badges} />
      <CalendarHeatmap />
      
      <StudyChart />
      <QuickActions />
      <FooterTip tip={dailyTip} />
      
    </div>
  );
};

export default Dashboard;
