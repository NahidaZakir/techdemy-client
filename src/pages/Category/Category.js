import React from 'react';
import { useLoaderData } from 'react-router';

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