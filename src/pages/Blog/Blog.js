import React from 'react';
import { useLoaderData } from 'react-router';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
    const allblogs = useLoaderData();
    return (
        <div className="w-75 mx-auto">
            <h2 className="text-success my-3 text-center" > Techdemy Blogs</h2>
            {
                allblogs.map(s_blog => <BlogCard key={s_blog.id} blogInfo={s_blog}></BlogCard>)
            }
        </div>
    );
};

export default Blog;