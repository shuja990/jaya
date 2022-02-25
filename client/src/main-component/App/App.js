import React from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDMueqW9Jrz-e1C7LwdSCw8DL2e_cXv48",
  authDomain: "jaya-7b3a9.firebaseapp.com",
  projectId: "jaya-7b3a9",
  storageBucket: "jaya-7b3a9.appspot.com",
  messagingSenderId: "244410808318",
  appId: "1:244410808318:web:bb5712d9208c36dd3832af",
  measurementId: "G-QCLRLGHJZ3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);

const App = () => { 

  return (
    <div className="App" id='scrool'>
          <AllRoute/>
          <ToastContainer/>
    </div>
  );
}

export default App;
