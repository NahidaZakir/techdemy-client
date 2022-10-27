import React from 'react';
import { useLoaderData } from 'react-router';
import BlogCard from '../BlogCard/BlogCard';

const Ques = () => {
    const allques = useLoaderData();
    return (
        <div className="w-75 mx-auto">
            <h2 className='text-success text-center my-3'>Frequently Asked Questions</h2>
            {
                allques.map(ques => <BlogCard key={ques.id} info={ques}></BlogCard>)
            }

        </div>
    );
};

export default Ques;