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
  apiKey: "AIzaSyBl3JvpHR2Y6hHAx8eREqoAEUVzqSJbrtg",
  authDomain: "aincradlatam-22fb8.firebaseapp.com",
  projectId: "aincradlatam-22fb8",
  storageBucket: "aincradlatam-22fb8.appspot.com",
  messagingSenderId: "1039121343285",
  appId: "1:1039121343285:web:c359694d4c5e5854c8627c",
  measurementId: "G-PD04R5C51Z"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const getFirestore = getFirestore(app);
const analytics = getAnalytics(app);
