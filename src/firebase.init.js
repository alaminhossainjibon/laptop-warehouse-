// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCJlfk047phu-uHNtQFMtuydU4qZeLkb28",
    authDomain: "laptop-warehouse-78ab7.firebaseapp.com",
    projectId: "laptop-warehouse-78ab7",
    storageBucket: "laptop-warehouse-78ab7.appspot.com",
    messagingSenderId: "725091382648",
    appId: "1:725091382648:web:51a656473774c365e1048d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
