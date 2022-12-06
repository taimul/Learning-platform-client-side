import React from 'react';
import { Button, Image, ListGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";
import './CourseDetails.css'
const ref = React.createRef();

const CourseDetails = () => {
    const courses = useLoaderData();
    const { _id, name, title, description, image, price, instructor, lessons } = courses;



    return (
        <div ref={ref} className='container'>

            <div className='bg'>
                <div className='details'>
                    <p className='bg-t'>{name}</p>
                    <h3>{title}</h3>
                    <p>Instructed by: {instructor.name}</p>
                    <h5>{description}</h5>
                    <h4>Price: {price}$</h4>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/checkout/${_id}`}><Button variant="success">Get Premium Access</Button></Link>
                        <ReactToPdf targetRef={ref} filename={name}>
                            {({ toPdf }) => (
                                <Button onClick={toPdf} variant='danger'>Download PDF</Button>
                            )}
                        </ReactToPdf>

                    </div>
                </div>
                <Image className='img' style={{ width: "50%" }} src={image}></Image>
            </div>
            <div className='pdf'>
                <Image className='img' style={{ width: "50%" }} src={image}></Image>
                <h4>{name}</h4>
                <h2>{title}</h2>
                <p>Instructed by: {instructor.name}</p>
                <h5>{description}</h5>
                <h4>Price: {price}$</h4>
            </div>
            <div>
                <p className='lesson mt-4'>Total lesson: {lessons.length}</p>
            </div>
            {
                lessons.map((lesson, index) => <ListGroup key={lesson._id} variant="flush">
                    <ListGroup.Item>{index + 1}. {lesson.title}</ListGroup.Item>
                </ListGroup>)
            }

        </div>
    );
};

export default CourseDetails;