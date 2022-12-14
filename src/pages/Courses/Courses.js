import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Categories from '../Categories/Categories';
import CourseNav from '../CourseNav/CourseNav';



const Courses = () => {

    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col lg="3" className="d-none d-lg-block">
                        <h4 className='my-3'>Categories</h4>
                        <Categories></Categories>
                    </Col>
                    <Col lg="9">
                        <CourseNav></CourseNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;