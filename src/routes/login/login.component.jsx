
// import { useEffect } from "react";,
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './login.styles.scss'



const Login=()=>{
    // useEffect( ()=>{  //latest reach hooks disable using asyncronous anonymous function , and use additional function for fetching data.
    //     const fetchData =async()=>{
    //     const res = await getRedirectResult(auth);    //useeffect function are useful for login auth using redirect
    //     if(res){                                       // because everytime the website fetch it will reload the entire page then empth the data result.only with this will prevent the default funciton from happening.
    //     const userDocRef = await createUserDocFromAuth(res.user)
    //     }
    //     }
    //     fetchData()
    // },[])

    // const logGoogRediretleUser  = async()=>{
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user})
    // }
    return(
        <div className="login-page-container">
            
            <SignInForm/>
            <SignUpForm/>
        </div>
      // <button onClick={logGoogRediretleUser}>sign in with google Redirect</button>
    )
}

export default Login