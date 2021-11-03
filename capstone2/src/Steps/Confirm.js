import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Confirm = () => {
    return (
        <div>
        <h4> Information Succesfully Saved</h4>
       <ListGroup style={{maxwidth:'600px', margin: 'auto'}}>

        <ListGroup.Item>First Nmae: </ListGroup.Item>
         <ListGroup.Item>Last Name: </ListGroup.Item>
        <ListGroup.Item>Email: </ListGroup.Item>
        <ListGroup.Item>Job: </ListGroup.Item>
        <ListGroup.Item>City</ListGroup.Item>

        </ListGroup>
            
        </div>
    )
}

export default Confirm
