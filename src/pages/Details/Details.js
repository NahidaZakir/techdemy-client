import React from 'react';
import { useLoaderData } from 'react-router';
import CourseCard from '../CourseCard/CourseCard';

const Details = () => {
    const detailInfo = useLoaderData();
    return (
        <div>
            <CourseCard key={detailInfo.id} details={detailInfo}></CourseCard>
        </div>
    );
};

export default Details;