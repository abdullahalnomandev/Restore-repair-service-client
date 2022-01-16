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
  const googleProvider = new GoogleAuthProvider();
  initializeApp(firebaseConfig);

  //CHECK ADMIN
  manageAdmin.checkAdmin(authUser.email).then((res) => {
    setAdmin(res.admin);
  });

  //Register User

  const registerUser = (email, password, name) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateName(name);
        setErrorMessage("");
        setSuccessMessage(true);
        navigate("/");
        console.log(user);
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
        console.log(result);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error", errorMessage, "errMail", email, credential);
      });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        auth.currentUser
          .getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem("token", idToken);
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
      displayName: updatedName,
    })
      .then(() => {
        // Profile updated!
      })
      .catch((error) => {
        // An error occurred
      });
  };

  //LOG OUT

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setAuthUser("");
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
    admin,
  };
};

export default useFirebase;
