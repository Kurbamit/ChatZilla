const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDd6Q5TJeR0Wa1KtLXq9-DUbZhMGkIiqC4",
    authDomain: "chatzilla-8a1f8.firebaseapp.com",
    projectId: "chatzilla-8a1f8",
    storageBucket: "chatzilla-8a1f8.appspot.com",
    messagingSenderId: "76532236145",
    appId: "1:76532236145:web:546fd0a24931a04967c0d0",
    measurementId: "G-XZ84VZJD8V"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

async function fetchUsers() {
  const users = await getDocs(collection(database, 'users'));
  users.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

module.exports = database;
module.exports = fetchUsers;