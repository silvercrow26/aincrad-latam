// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUZgwYza8y_UtXWNSzpGwkQo_vqK7X13Q",
  authDomain: "aincrad-latam.firebaseapp.com",
  projectId: "aincrad-latam",
  storageBucket: "aincrad-latam.appspot.com",
  messagingSenderId: "905356421564",
  appId: "1:905356421564:web:cccae22e3cb40de404e3b9",
  measurementId: "G-EXL3BLDJ4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getAuth = getAuth(app);
export const getFirestore = getFirestore(app);
const analytics = getAnalytics(app);