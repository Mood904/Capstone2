import React from 'react';
import {Form} from 'react-bootstrap'
const Biography = () => {
    return (
        <div>
            <Form className= "mt-5">
                <h4> Enter your Details</h4>

                <Form.Group className="mt-5">
                    <Form.Label>Job</Form.Label>
                    <Form.Control type="text" placeholder="Job" />
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" />
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="email" placeholder="Country" />
                </Form.Group>

                                     
            </Form>
        
        </div>
    )
}

export default Biography