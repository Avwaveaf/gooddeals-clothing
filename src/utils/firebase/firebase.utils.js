// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDajMemRCqc5tpahR80AIRleWq8lkUMeiw",
  authDomain: "gooddeals-4a24b.firebaseapp.com",
  projectId: "gooddeals-4a24b",
  storageBucket: "gooddeals-4a24b.appspot.com",
  messagingSenderId: "857219850090",
  appId: "1:857219850090:web:baa2c8a53e0aa101290f13"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect=()=> signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async(userAuth, additionalInfo={})=>{
  if(!userAuth)return;
  const userDocRef =  doc(db, "users", userAuth.uid);
  
  const userSnapshot = await getDoc(userDocRef)
  

  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,email,createdAt,...additionalInfo
      })
    }catch(e){
      console.log("error creating the user",e.message);
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email||!password)return;
  
  return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email||!password)return;
  
  return await signInWithEmailAndPassword(auth,email,password)
}