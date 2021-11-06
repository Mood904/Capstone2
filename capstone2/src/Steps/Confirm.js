import React, {useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Confirm = ({values}) => {

    const {firstName,lastName,email,job,city,country} = values

    return (
        <div>
        <h4> Information Succesfully Saved</h4>
       <ListGroup style={{maxwidth:'600px', margin: 'auto'}}>

        <ListGroup.Item>First Name: {firstName} </ListGroup.Item>
         <ListGroup.Item>Last Name:{lastName} </ListGroup.Item>
        <ListGroup.Item>Email:{email} </ListGroup.Item>
        <ListGroup.Item>Job:{job} </ListGroup.Item>
        <ListGroup.Item>City: {city}</ListGroup.Item>
        <ListGroup.Item>Country: {country} </ListGroup.Item>

        </ListGroup>
            
        </div>
    )
}

export default Confirm
