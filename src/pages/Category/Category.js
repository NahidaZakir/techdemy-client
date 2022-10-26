import React from 'react';
import { useLoaderData } from 'react-router';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CourseSumCard from '../CourseSumCard/CourseSumCard';
const Category = () => {
    const categoryClasses = useLoaderData();

    return (
        <div>
            {
                categoryClasses.map(course => <CourseSumCard key={course.id} courseInfo={course}></CourseSumCard>)
            }
        </div>
    );
};

export default Category;