import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "house-marketplace-app-c2484.firebaseapp.com",
  projectId: "house-marketplace-app-c2484",
  storageBucket: "house-marketplace-app-c2484.appspot.com",
  messagingSenderId: "523897864899",
  appId: "1:523897864899:web:6864d1197ed8099b29d876"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
