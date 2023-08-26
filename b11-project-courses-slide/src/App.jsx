import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

import Courses from './components/Courses';
import Loading from './components/Loading';


function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourses);
  }

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);
      setLoading(false);
    }
    catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {
            courses.length === 0 ? (
              <div className='refteshDiv'>
                <h4>Kursların hepsini sildin</h4>
                <button className='cardDeleteBtn' onClick={() => fetchCourses()}>Yenile</button>
              </div>
            ) : (
              <Courses courses={courses} removeCourse={deleteCourse} />
            )
          }
        </>
      )}
    </>
  )
}

export default App
