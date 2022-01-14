import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../firebase/firebaseConfig";

const useFirebase = () => {
  const [authUser, setAuthUser] = useState({
    name: null,
    email: null,
    image: null,
    token: null,
  });

  console.log('authUser',authUser);

  const googleProvider = new GoogleAuthProvider();
  initializeApp(firebaseConfig);
  // GOOGLE PUP UP SIGN IN
  const googleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const userToken = credential.accessToken;
        // const user = result.user;

        // const newUser = { ...authUser };
        // newUser.name = user.displayName;
        // newUser.email = user.email;
        // newUser.image = user.photoURL;
        // newUser.token = userToken;

        // setAuthUser(newUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error", errorMessage, "errMail", email, credential);
      });
  };

  // AUTH token

  // const storeAuthToken = () => {
  //   const auth = getAuth();
  //   auth.currentUser
  //     .getIdToken(/* forceRefresh */ true)
  //     .then(function (idToken) {
  //       console.log("idToken", idToken);
  //     })
  //     .catch(function (error) {
  //       // Handle error
  //       console.log(error);
  //     });
  // };

 useEffect(()=>{

  const auth = getAuth();
  const unsubscribed= onAuthStateChanged(auth, (user) => {
    if (user) {
      
      auth.currentUser
      .getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token',idToken)
        console.log("idToken", idToken);
      })
      .catch(function (error) {
        // Handle error
        console.log(error);
      });

      const newUser = { ...authUser };
      newUser.name = user.displayName;
      newUser.email = user.email;
      newUser.image = user.photoURL;
      setAuthUser(newUser);
      // storeAuthToken();
    } else {
      setAuthUser({})
    }
  });
  return () => unsubscribed;
 },[])


  //LOG OUT

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setAuthUser("");
        console.log("sign out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    googleSignIn,
    logOut,
    authUser,
  };
};

export default useFirebase;
