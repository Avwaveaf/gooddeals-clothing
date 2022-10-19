import { signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in.styles.scss'


const signInFormInput = {

    email:"",
    password:"",

}

const SignInForm =()=>{
    const [formFields, setFormFields] = useState(signInFormInput);
    const { email, password} = formFields;
    

    const handleChange = (event)=>{
        const {name,value}= event.target;
        setFormFields({...formFields, [name]: value})
    }
    const resetFormFields=()=>{
        setFormFields(signInFormInput);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password' : 
                alert("incorrect passoword");
                resetFormFields();
                break;
                case 'auth/user-not-found':
                    alert("no user asociated with this email");
                    resetFormFields();
                     break;
                default :
                console.error(error);
            }

        }
    }
    const logGoogleUser  = async()=>{
         await signInWithGooglePopup();
        

    }
return(
    <div className="sign-up-container">
    <h2>Already have an accout</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>  
            
            <FormInput type="email" label="Email" name="email" onChange={handleChange} value={email} required/>
            <FormInput type="password" label="Password" name="password" onChange={handleChange} value={password} required/>
            <div className='buttons-container'>
                <Button  type="submit" >Sign in</Button>
                <Button type="button" buttonType="google" onClick={logGoogleUser}>Google Sign In</Button>
            </div>

        </form> 
    </div>
);
}
export default SignInForm;