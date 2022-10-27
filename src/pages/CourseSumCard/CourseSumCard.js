import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CourseSumCard = ({ courseInfo }) => {
    const { id, title, teacher, duration, students, image } = courseInfo;
    return (
        <div className='d-flex justify-content-center'>
            <Card className="w-75 my-2">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Text>
                        <div className="d-flex justify-content-between my-0">

                            <Card.Text>Students Enrolled: {students} </Card.Text>
                            <div className="d-flex">
                                <Card.Text>Duration {duration} h</Card.Text>
                                <FaBookmark className="ms-3"></FaBookmark>

                            </div>

                        </div>
                    </Card.Text>
                    <Card.Title className="my-0">{title}</Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <Card.Text>Teacher: {teacher}</Card.Text>
                            <div className="d-flex">
                                <Link to={`/courses/${id}`}><Button variant="success">Details</Button>
                                </Link>

                            </div>

                        </div>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSumCard;