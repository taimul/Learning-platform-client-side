import React from 'react';
import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseSummaryCard.css'

const CourseSummaryCard = ({ courses }) => {
    const { _id, title, description, image, price, instructor, duration } = courses;
    return (
        <div className='col-md-4'>
            <Card className='mb-4' style={{ width: '18rem' }}>
                <Link to={`/courses/${_id}`}><Card.Img variant="top" src={image} /></Link>
                <Card.Body>
                    <Card.Title style={{ height: "70px" }}>{title}</Card.Title>
                    <div>
                        <p>Instructor: {instructor.name}</p>
                    </div>
                    <Card.Text style={{ width: "100%", height: "100px" }}>
                        {description.length > 30 ?
                            <p>{description.slice(0, 130) + '...'} <Link to={`/courses/${_id}`}>Read more</Link></p>
                            :
                            <p>{description}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Body className='d-flex justify-content-between'>
                    <Badge pill bg="info">
                        Price: $ {price}
                    </Badge>{' '}
                    <Badge pill bg="success">
                        {duration} minutes
                    </Badge>{' '}

                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSummaryCard;