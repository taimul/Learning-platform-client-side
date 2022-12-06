import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import './Category.css';

const Category = () => {
    const courses = useLoaderData();


    return (
        <Container>
            <h5 className='category-fix'> Courses have: {courses.length}</h5>
            <div className='row'>
                <div className='col-md-3 '>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-md-9'>
                    <div className='row'>
                        {
                            courses.map(courses => <CourseSummaryCard
                                key={courses._id}
                                courses={courses}
                            ></CourseSummaryCard>)
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Category;