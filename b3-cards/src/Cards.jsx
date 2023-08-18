import React from 'react'

import { Card, Button } from 'react-bootstrap';

function Kart({ image, title, description }) {
    return (
        <Card className='p-0' style={{ width: '16rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className='fs-4 fw-bold'>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Kart;