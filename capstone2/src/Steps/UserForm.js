import React, {useState} from 'react'
import UserDetails from './UserDetails'
import Welcome from './Welcome'

export const UserForm = () => {
    const {activeStep, setActiveStep} = useState(0)
    const getSteps = () => {
        return ["Welcome", "User Details", "Biography", "Confirm"]
    }

    const steps = getSteps()
    const [multiFormValues, setMultiFormValues] = useState({
        FirstName: "",
        lastName: "",
        email: "",
        job:"",
        city: "",
    })

    const handlenext = () => {
        setActiveStep((nextStep) => nextStep + 1)
    }
        
    const handleNext = () => {
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
        </div>
    )
    
    
}
