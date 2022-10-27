import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const CourseCard = ({ details }) => {
    const { description, title, image } = details;
    return (
        <div className="w-75 mx-auto" >
            <div className="d-flex justify-content-between my-3" >
                <h2 >Course Details </h2>
                <Pdf targetRef={ref} scale={1} filename="course-details.pdf">
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
        </div >
    );
};

export default CourseCard;