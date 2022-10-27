import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const CourseCard = ({ details }) => {
    const { description, title, image, id } = details;
    return (
        <div className="w-75 mx-auto" >


            <div className="d-flex justify-content-between my-3" >
                <h2 >Course Details </h2>
                <Pdf targetRef={ref} filename="course-details.pdf">
                    {({ toPdf }) => <Button variant="success" onClick={toPdf}>Download Pdf</Button>}
                </Pdf>
            </div>
            <div ref={ref} className="my-4">
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body >
                        <Card.Title className="text-center">{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='text-center mx-auto my-3'>
                <Link to={`/checkout/${id}`}><Button variant="success">Get Premium Access</Button></Link>

            </div>
        </div >
    );
};

export default CourseCard;