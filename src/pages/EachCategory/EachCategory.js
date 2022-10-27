import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Categories from '../Categories/Categories';
import Category from '../Category/Category';

const EachCategory = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg="3" className="d-none d-lg-block">
                        <h4 className='my-3'>Categories</h4>
                        <Categories></Categories>
                    </Col>
                    <Col lg="9">
                        <Category></Category>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EachCategory;