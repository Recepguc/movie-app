import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: "AIzaSyCLUyz8ahvy0v-O3RhavF7Dq5B6e_jupdc",
  authDomain: "movie-app-c3af1.firebaseapp.com",
  projectId: "movie-app-c3af1",
  storageBucket: "movie-app-c3af1.appspot.com",
  messagingSenderId: "856523255180",
  appId: "1:856523255180:web:f7fe0e93c44368c64cfaa9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");

    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};
export const logout = () => {
  signOut(auth);
  alert("logged out successfull");
};
