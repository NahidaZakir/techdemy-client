import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CourseSumCard = ({ courseInfo }) => {
    const { title, teacher, duration, students } = courseInfo;
    return (
        <div className='d-flex justify-content-center'>
            <Card className="w-50 my-2">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {teacher} {students}{duration}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSumCard;