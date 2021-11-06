import React,{useState} from 'react'
import Biography from './Steps/Biography'
import Confirm from './Steps/Confirm'
import UserDetails from './Steps/UserDetails'
import Welcome from './Steps/Welcome'
import {Button} from 'react-bootstrap'


const UserForm = () => {
    const [activeStep, setActiveStep] = useState(0)
    const getSteps = () => {
        return ["Welcome", "User Details", "Biography", "Confirm"]
    }

    const steps = getSteps()

    const [multiFormValues, setMultiFormValues] = useState({
        firstName: '',
        lastName:'',
        email: '',
        job:'',
        city: '',
        country:''
    })

    const handleNext = () => {
        setActiveStep((nextStep) => nextStep + 1)
    }
        
    const handleBack = () => {
        setActiveStep((previousStep) => previousStep -1)
    } 
    const handleChange = (input) => (e) => {
        setMultiFormValues ({...multiFormValues, [input]: e.target.value})
    }      
    return (
        <div>
            {activeStep=== 0 && (
                <Welcome handleChange={handleChange} />
            )}
            {activeStep ===1 && (
                <UserDetails values={multiFormValues} handleChange={handleChange} />
            )}
            {activeStep=== 2 && (
                <Biography values = {multiFormValues} handleChange={handleChange} />
            )} 

            {activeStep === 3 && (
                <Confirm v={multiFormValues} handleChange={handleChange} />
            )}
            <Button disabled={activeStep === 0} className="mr-5" onClick={handleBack} >Back</Button>

            <Button className ="ml-5" variant="contained" onClick={handleNext} >{}{activeStep === steps.length -2 ? 'Submit' : 'Next'}</Button>
            
        </div>
    )
    
    
}

export default UserForm