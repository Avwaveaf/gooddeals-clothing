import { onAuthStateChangedListener,createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import { createContext, useState , useEffect} from "react";

//this is the actual value that you want to access
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null
});

export const UserProvider = ({children})=>{

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocFromAuth(user)
            }
            
            setCurrentUser(user)
        })
        return unsubscribe
    },[])
    const [currentUser, setCurrentUser]= useState(null)
    const value = {currentUser, setCurrentUser}
    return(<UserContext.Provider value={value}>{children}</UserContext.Provider>)    
}