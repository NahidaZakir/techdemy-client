import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://techdemy-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>

            {
                categories.map(category => <p key={category.id}><Link className='text-success text-decoration-success ' to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default Categories;