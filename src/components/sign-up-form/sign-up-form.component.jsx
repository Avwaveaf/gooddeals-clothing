import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-up-form.styles.scss'


const defaultFormFields = {
    displayName :"",
    email:"",
    password:"",
    confirmPassword:""
}
const SignUpForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    

    const handleChange = (event)=>{
        const {name,value}= event.target;
        setFormFields({...formFields, [name]: value})
    }
    const resetFormFields=()=>{
        setFormFields(defaultFormFields)    
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert("password not match!")
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocFromAuth(user, {displayName})
            await alert("account successfully created")

            resetFormFields();
            
        } catch (error) {
            if(error.code === "auth/email-already-in-use"){
                alert("email already in use")
            }else{
                console.error(error)
            }
            
        }
    }
    
    return(
        <div className="sign-up-container">
        <h2>Don't have an account?  </h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>  
                
                <FormInput type="text" label="Display Name" name="displayName" onChange={handleChange} value={displayName} required/>
                <FormInput type="email" label="Email" name="email" onChange={handleChange} value={email} required/>
                <FormInput type="password" label="Password" name="password" onChange={handleChange} value={password} required/>
                <FormInput type="password" label="Confirm Password" name="confirmPassword" onChange={handleChange} value={confirmPassword} required/>


                <Button  type="submit">Sign Up</Button>
            </form> 
        </div>
    )
}

export default SignUpForm;