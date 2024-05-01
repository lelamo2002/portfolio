// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMY6cbA78owdVGPW9MTsvkbCtlyx_MhxQ",
  authDomain: "portfolio-3ed32.firebaseapp.com",
  projectId: "portfolio-3ed32",
  storageBucket: "portfolio-3ed32.appspot.com",
  messagingSenderId: "933371655511",
  appId: "1:933371655511:web:4003c17563022acc6bba12",
  measurementId: "G-7E24TNR5R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export {db};