import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { firebaseConfig } from "../firebase/firebaseConfig";

const useFirebase = () => {

  const [authUser,setAuthUser]=useState({name:null,email:null,image:null,token:null})

  const googleProvider = new GoogleAuthProvider();
  initializeApp(firebaseConfig);
  // GOOGLE PUP UP SIGN IN
  const googleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const userToken = credential.accessToken;
        const user = result.user;
        const newUser ={...authUser}
              newUser.name=user.displayName
              newUser.email=user.email
              newUser.image=user.photoURL
              newUser.token=userToken
              storeAuthToken()
              setAuthUser(newUser)
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error",errorMessage,'errMail',email,credential);
      });
  };

  // AUTH token

  const storeAuthToken= ()=>{
    const auth = getAuth();
    auth.currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
      console.log("idToken",idToken);
      sessionStorage.setItem('token',idToken)
    }).catch(function(error) {
      // Handle error
      console.log(error);
    });
  }

  //LOG OUT

  const logOut =()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
    });

  }

  return {
      googleSignIn,
      logOut,
      authUser,
  };
};

export default useFirebase;
