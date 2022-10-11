import {  signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils"
// import { useEffect } from "react";,
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";



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
    const logGoogleUser  = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocFromAuth(user)
    }
    // const logGoogRediretleUser  = async()=>{
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user})
    // }
    return(
        <div>
            <h1>this is login page</h1>
            
            <button onClick={logGoogleUser}>sign in with google Popup</button>
            <SignUpForm/>
        </div>
      // <button onClick={logGoogRediretleUser}>sign in with google Redirect</button>
    )
}

export default Login