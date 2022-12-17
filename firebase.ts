import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXFghj4f-Qg7KQECzFESXiR6k2b1ORY2A',
  authDomain: 'my-pet-1fce0.firebaseapp.com',
  projectId: 'my-pet-1fce0',
  storageBucket: 'my-pet-1fce0.appspot.com',
  messagingSenderId: '712836331497',
  appId: '1:712836331497:web:a80bd32b9672abaa773d78',
  measurementId: 'G-MLSBDGP6W7',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
