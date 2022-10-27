import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseSumCard from '../CourseSumCard/CourseSumCard';
const CourseNav = () => {
    const [allCourses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            {
                allCourses.map(course => <CourseSumCard key={course.id} courseInfo={course}></CourseSumCard>)
            }
        </div>
    );
};

export default CourseNav;