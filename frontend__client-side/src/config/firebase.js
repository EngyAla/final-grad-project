// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCA369liWUKSKcVYmOHdmrDzbz-pnQtFAY",
    authDomain: "patient-dashboard-acaf7.firebaseapp.com",
    projectId: "patient-dashboard-acaf7",
    storageBucket: "patient-dashboard-acaf7.firebasestorage.app",
    messagingSenderId: "311467102558",
    appId: "1:311467102558:web:fd2a212b72da50f86bbfcf",
    measurementId: "G-PD381TKRTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);