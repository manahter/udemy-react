import { useState } from 'react'
import './App.css'

import Course from './Course';

function getRandomCourse() {
  const courseArray = ['Angular', 'Bootstrap5', 'Ccsharp', 'Kompleweb'];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([])

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  }

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <>
      <button onClick={handleClick}>Kurs Ekle</button>
      <button onClick={() => {setCourses([])}}>Kursları Temizle</button>
      <div>
        {courseList}
      </div>
    </>
  )
}

export default App
