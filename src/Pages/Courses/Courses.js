import React from 'react';
import './Courses.css';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <Container>
            <h3 className='course-length mt-4'> Course have: {courses.length}</h3>

            <div className='row'>
                <div className='col-md-3'>
                    <hr />
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

export default Courses;