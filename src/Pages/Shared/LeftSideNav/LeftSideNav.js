import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://learn-server-seven.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    })

    return (
        <div>
            <div className='left-nav-bar'>
                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;