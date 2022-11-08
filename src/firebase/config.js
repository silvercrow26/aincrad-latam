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
  apiKey: import.meta.env.VITE_APP_apiKey_URL,
  authDomain: import.meta.env.VITE_APP_authDomain_URL,
  projectId: import.meta.env.VITE_APP_projectId_URL,
  storageBucket: import.meta.env.VITE_APP_storageBucket_URL,
  messagingSenderId: import.meta.env.VITE_APP_messagingSenderId_URL,
  appId: import.meta.env.VITE_APP_appId_URL,
  measurementId: import.meta.env.VITE_APP_measurementId_URL,
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
