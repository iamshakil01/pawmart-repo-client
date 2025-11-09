// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIkscrEeAQn_Oi1YsZMSAyO2fG9buKJDY",
    authDomain: "paw-mart-auth.firebaseapp.com",
    projectId: "paw-mart-auth",
    storageBucket: "paw-mart-auth.firebasestorage.app",
    messagingSenderId: "79299314515",
    appId: "1:79299314515:web:178599448f9f51dd0957a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;