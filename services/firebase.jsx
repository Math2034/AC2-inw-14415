// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHk9D4Ufgy5SMltbElxqQyepy24XMrB7M",
    authDomain: "crud-simples-f1783.firebaseapp.com",
    projectId: "crud-simples-f1783",
    storageBucket: "crud-simples-f1783.appspot.com",
    messagingSenderId: "89179552949",
    appId: "1:89179552949:web:eff2b2ceffc5a8e6f512fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)