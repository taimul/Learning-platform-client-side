import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Container>
            <h1 className='text-center mb-4 mt-4'>Frequently Asked Question</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why Should we took courses from here?</Accordion.Header>
                    <Accordion.Body>
                        We have the best instructor and best video quality for best experience.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Did we get any support after purchasing the course?</Accordion.Header>
                    <Accordion.Body>
                        Yes! Any support will be given under that course.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='mb-4' eventKey="2">
                    <Accordion.Header>Is there any refund?</Accordion.Header>
                    <Accordion.Body>
                        Yes, after purchasing any course we will give you 1 hour to clam refund, after that refund not possible.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default FAQ;