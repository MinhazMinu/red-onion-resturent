import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";

firebase.initializeApp(firebaseConfig);

const Auth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const singInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        const { displayName, email } = res.user;
        const singedInUser = { name: displayName, email };
        setUser(singedInUser);
        return res.user;
      })
      .catch(function(error) {
        // Handle Errors here.

        return error.message;

        // ...
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        setUser(null);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return { user, singInWithGoogle, signOut };
};
export default Auth;
