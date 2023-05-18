import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAq6jeO0tKtLtuXazYX-Zb9HgnT7wfX1vw",
  authDomain: "rentalapp-26d4b.firebaseapp.com",
  databaseURL: "https://rentalapp-26d4b-default-rtdb.firebaseio.com",
  projectId: "rentalapp-26d4b",
  storageBucket: "rentalapp-26d4b.appspot.com",
  messagingSenderId: "726606589281",
  appId: "1:726606589281:web:ceda757881aae5030be920",
  measurementId: "G-9FT3JNNHB6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();

export {auth};
export default db;
