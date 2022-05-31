import React from 'react';
import Card from 'react-bootstrap/Card'

export default function KnowledgeBaseCard (props) {
    return(<div>
    <Card style={{ width: '18rem', height: '13rem' }}>
        <Card.Body>
            <Card.Title>{props.FirstName} {props.LastName}</Card.Title>
            <Card.Text>{props.Email}</Card.Text>
            <Card.Text>{props.Phone}</Card.Text>
        </Card.Body>
    </Card>

</div>)}