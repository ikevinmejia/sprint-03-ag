import { userTypes } from "../Types/userTypes";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { google } from "../../Firebase/firebaseConfig";

const loginSync = (user) => ({
  type: userTypes.login,
  payload: user,
});

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user: { displayName, email, photoURL } }) =>
        dispatch(loginProvider(displayName, email, photoURL))
      )
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
};

const loginProvider = (displayName, email, photoURL) => {
  return {
    type: userTypes.login,
    payload: {
      displayName,
      email,
      photoURL,
    },
  };
};
