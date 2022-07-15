// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANLHstF6OjEMSsMOOw_p-QSxNCFveKC3M",
  authDomain: "happyfeet-6ca06.firebaseapp.com",
  projectId: "happyfeet-6ca06",
  storageBucket: "happyfeet-6ca06.appspot.com",
  messagingSenderId: "618226668363",
  appId: "1:618226668363:web:3b48d0d1e5228a35d00ece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);