// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTUkwGIFDf5IvXRv1UfQGtwRH9BPkjKSM",
  authDomain: "clone-6b8d3.firebaseapp.com",
  projectId: "clone-6b8d3",
  storageBucket: "clone-6b8d3.appspot.com",
  messagingSenderId: "872247161105",
  appId: "1:872247161105:web:7eb13498f8e69e76865cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {db , auth, provider};