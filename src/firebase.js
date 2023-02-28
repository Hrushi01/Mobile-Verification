import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiwcvIvo3Rnp3jeZQUT9ecSOgBxLok6Yw",
  authDomain: "otp-verification-75b7a.firebaseapp.com",
  projectId: "otp-verification-75b7a",
  storageBucket: "otp-verification-75b7a.appspot.com",
  messagingSenderId: "628727588055",
  appId: "1:628727588055:web:c3eee509a48fdb71b7fc92",
  measurementId: "G-E47WSMLVVN",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
