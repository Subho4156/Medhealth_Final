// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "0",
  authDomain: "0",
  projectId: "0",
  storageBucket: "0",
  messagingSenderId: "0",
  appId: "0",
  measurementId: "0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
