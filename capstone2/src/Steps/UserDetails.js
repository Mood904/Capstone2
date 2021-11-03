import React from 'react';
import {Form} from 'react-bootstrap'
const UserDetails = () => {
    return (
        <div>
            <Form className= "mt-5">
                <h4> Enter your Details</h4>

                <Form.Group className="mt-5">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="First Name" />
                </Form.Group>

                                     
            </Form>
        
        </div>
    )
}

export default UserDetails