import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterComponent from './components/Router';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDd6Q5TJeR0Wa1KtLXq9-DUbZhMGkIiqC4",
  authDomain: "chatzilla-8a1f8.firebaseapp.com",
  projectId: "chatzilla-8a1f8",
  storageBucket: "chatzilla-8a1f8.appspot.com",
  messagingSenderId: "76532236145",
  appId: "1:76532236145:web:546fd0a24931a04967c0d0",
  measurementId: "G-XZ84VZJD8V"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>
);

// async function FetchUsers() {
//   const users = await getDocs(collection(db, 'users'));
//   users.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   });
// }

// FetchUsers();