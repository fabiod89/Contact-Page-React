import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default function Compose () {

return (<>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control style={{ width: '18rem'}} type="text" placeholder="Enter First Name" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control style={{ width: '18rem'}} type="text" placeholder="Enter Last Name" />
        <Form.Label>Phone Number</Form.Label>
        <Form.Control style={{ width: '18rem'}} type="text" placeholder="Phone Number" />
        <Form.Label>Email</Form.Label>
        <Form.Control style={{ width: '18rem'}} type="text" placeholder="Email" />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={

        () => ( console.log("hey")    )
        
        }>
        Submit
    </Button>
    </Form>

        
</>);
}
