// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9akv5-YdBqaytFq69M2zzlbL8fPXZtTM",
  authDomain: "ecommerce-juamperezrocio.firebaseapp.com",
  projectId: "ecommerce-juamperezrocio",
  storageBucket: "ecommerce-juamperezrocio.appspot.com",
  messagingSenderId: "547527454355",
  appId: "1:547527454355:web:cf2a1b9ab91db1ecf16766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}