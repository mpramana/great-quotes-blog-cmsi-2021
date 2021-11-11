// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCQJCET3nVDBjqTgyrysoUldd0kuFrQgs",
  authDomain: "blog-fb04a.firebaseapp.com",
  projectId: "blog-fb04a",
  storageBucket: "blog-fb04a.appspot.com",
  messagingSenderId: "895681058029",
  appId: "1:895681058029:web:ee025d7c11def0edfee8e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

