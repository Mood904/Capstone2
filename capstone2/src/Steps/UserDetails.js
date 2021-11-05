import React from 'react';
import {Form} from 'react-bootstrap'

const UserDetails = ({values, handleChange}) => {
    return (
        <div>
            <Form className= "mt-5">
                <h4> Enter your Details</h4>

                <Form.Group className="mt-5">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control defaultvalue ={values.firstName} onChange = {handleChange('firstName')} type="text" placeholder="first Name" />
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control defaultvalue ={values.lastName} onChange = {handleChange('lastName')} type="text" placeholder="Last Name" />
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control defaultvalue ={values.email} onChange = {handleChange('email')}type="email" placeholder="email" />
                </Form.Group>

                                     
            </Form>
        
        </div>
    )
}

export default UserDetails