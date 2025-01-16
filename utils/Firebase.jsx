// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk_jmP2ZYVd9Ywf9xC23bR64gX1BWyH6Q",
  authDomain: "netflixgpt-d0c45.firebaseapp.com",
  projectId: "netflixgpt-d0c45",
  storageBucket: "netflixgpt-d0c45.firebasestorage.app",
  messagingSenderId: "99125219834",
  appId: "1:99125219834:web:f02367649ee8be21319443",
  measurementId: "G-TDHM8EX46J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
