// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiwcvIvo3Rnp3jeZQUT9ecSOgBxLok6Yw",
  authDomain: "otp-verification-75b7a.firebaseapp.com",
  projectId: "otp-verification-75b7a",
  storageBucket: "otp-verification-75b7a.appspot.com",
  messagingSenderId: "628727588055",
  appId: "1:628727588055:web:c3eee509a48fdb71b7fc92",
  measurementId: "G-E47WSMLVVN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
