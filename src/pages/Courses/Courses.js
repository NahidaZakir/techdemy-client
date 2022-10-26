import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Categories from '../Categories/Categories';



const Courses = () => {

    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col lg="4" className="d-none d-lg-block">
                        <h4 className='my-3'>Categories</h4>
                        <Categories></Categories>
                    </Col>
                    <Col lg="8">

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;