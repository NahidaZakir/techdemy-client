import React from 'react';
import Card from 'react-bootstrap/Card';
const BlogCard = ({ blogInfo }) => {
    const { question, answer } = blogInfo;
    return (
        <div className='my-5'>
            <Card>
                <Card.Header>{question}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {answer}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default BlogCard;