import Course from './Course';

function Courses({ courses, removeCourse }) {
    return (<div className='coursesMainDiv'>
        <div>
            <h2>Kurslarım</h2>
        </div>
        <div className="cardDiv">
            {
                courses.map((course, i) => {
                    return <Course key={i} {...course} removeOneCourse={removeCourse} />
                })
            }

        </div>
    </div>);
}

export default Courses;