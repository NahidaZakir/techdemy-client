import React from 'react';
import { useLoaderData } from 'react-router';
import CourseCard from '../CourseCard/CourseCard';
import CourseSumCard from '../CourseSumCard/CourseSumCard';

const Details = () => {
    const detailInfo = useLoaderData();
    return (
        <div>
            <CourseCard key={detailInfo.id} details={detailInfo}></CourseCard>
        </div>
    );
};

export default Details;