import { auth } from "../firebaseconfig/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { googleProvider } from "../firebaseconfig/firebase"
import React, { createContext } from "react"
import { signInWithPopup, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"


export const SignupInContext = createContext(null);

export const SignupInContextProvider = (props) => {
 // Get current user 
 const[user] = useAuthState(auth);

 // Enable navigate to home screen
 const naviagate = useNavigate();

// USe google to signin
 const googleAuthentication = async () => {
  let results = await signInWithPopup(auth, googleProvider);
  console.log(results);
  naviagate("/");
 }

 // Signout user
 const signOutUser = async () => {
  await signOut(auth);
  naviagate("/signin");
 }

 // Swap user profiles
 const userIMage = user?.photoURL;
 const username = user?.displayName;

 // Export providers
 const signupValues = { googleAuthentication, signOutUser, userIMage, username }

 return <SignupInContext.Provider value={signupValues}>{props.children}</SignupInContext.Provider>
}