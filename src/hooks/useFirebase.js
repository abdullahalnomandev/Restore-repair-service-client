import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseConfig } from "../firebase/firebaseConfig";
import { manageAdmin } from "../services/manageAdmin";


const useFirebase = () => {


  const [authUser, setAuthUser] = useState({
    name: null,
    email: null,
    image: null,
    token: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  console.log("authUser", authUser);
  const googleProvider = new GoogleAuthProvider();
  initializeApp(firebaseConfig);
  console.log("admin",admin);

//CHECK ADMIN 
manageAdmin.checkAdmin(authUser.email).then((res)=>{
  setAdmin(res.admin)

})


  //Register User

  const registerUser = (email, password, name) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateName(name)
        setErrorMessage("");
        setSuccessMessage(true);
        navigate("/");
        console.log(user);
        // ...
      })

      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setSuccessMessage(false);
      });
  };
  //SIGN IN USER

  const signInUser = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setErrorMessage("");
        setSuccessMessage(true);
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setSuccessMessage(false);
        setErrorMessage(errorMessage);
      });
  };

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

  useEffect(() => {
    const auth = getAuth();
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        auth.currentUser
          .getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem("token", idToken);
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
        setAuthUser({});
      }
    });
    return () => unsubscribed;
  }, []);
  //Update User Name
  const updateName = (updatedName) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: updatedName
    })
      .then(() => {
        // Profile updated!
        console.log('user name updated');
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };

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
    registerUser,
    signInUser,
    errorMessage,
    successMessage,
    admin
  };
};

export default useFirebase;
