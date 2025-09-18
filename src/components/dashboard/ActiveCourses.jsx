import React from 'react';
import { BookOpen, Play } from 'lucide-react';

const ActiveCourses = ({ courses }) => (
  <div className="courses-section">
    <h2 className="section-title">
      <BookOpen size={24} /> Your Active Courses
    </h2>
    <div className="courses-grid">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <div className="course-header">
            <h3 className="course-title">{course.title}</h3>
            <div className="course-progress">{course.progress}%</div>
          </div>
          <div className="next-lesson">Next: {course.nextLesson}</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
          </div>
          <button className="continue-btn">
            <Play size={16} /> Continue Learning
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ActiveCourses;
