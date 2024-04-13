// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNt-BIGM40r-ydttpZaBB5sP_XqmuKoLI",
  authDomain: "fir-flipcon.firebaseapp.com",
  projectId: "fir-flipcon",
  storageBucket: "fir-flipcon.appspot.com",
  messagingSenderId: "140235287485",
  appId: "1:140235287485:web:015ae360af76804c4dc0d4",
  measurementId: "G-Y8BL4T6P7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {app,auth};