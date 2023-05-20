
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1tn0OEOYoIQPkODfRoEaF7Qwk6GwQJUg",
  authDomain: "sec-page.firebaseapp.com",
  projectId: "sec-page",
  storageBucket: "sec-page.appspot.com",
  messagingSenderId: "962986463400",
  appId: "1:962986463400:web:9c53c80585a34b2336729d",
  measurementId: "G-4JH4BVBDHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;