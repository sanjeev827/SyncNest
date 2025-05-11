// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "cocreate-f328e.firebaseapp.com",
  projectId: "cocreate-f328e",
  storageBucket: "cocreate-f328e.firebasestorage.app",
  messagingSenderId: "659452996309",
  appId: "1:659452996309:web:db4986c9433a9cf096d05c",
  measurementId: "G-51BT3D7KMQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)


