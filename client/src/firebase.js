// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-2b80f.firebaseapp.com",
  projectId: "real-estate-2b80f",
  storageBucket: "real-estate-2b80f.appspot.com",
  messagingSenderId: "471541490340",
  appId: "1:471541490340:web:28c696f44bce1280dffc31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);