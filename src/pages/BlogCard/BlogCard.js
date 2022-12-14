import React from 'react';
import Card from 'react-bootstrap/Card';
const BlogCard = ({ info }) => {
    const { question, answer } = info;
    return (
        <div className='my-5'>
            <Card>
                <Card.Header className="text-success">{question}</Card.Header>
                <Card.Body>
                    <Card.Text className="text-success">
                        {answer}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default BlogCard;