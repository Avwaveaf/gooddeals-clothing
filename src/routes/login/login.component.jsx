import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils"
const Login=()=>{
    const logGoogleUser  = async()=>{
        const {user} = await signInWithGooglePopup();
        createUserDocFromAuth(user)
    }

    return(
        <div>
            <h2>this is login page</h2>
            <button onClick={logGoogleUser}>sign in with google</button>
        </div>
    )
}

export default Login