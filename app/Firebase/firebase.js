// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjmB5FwRXx4IoFCcpYNTb5_G_RC6AGNRo",
  authDomain: "flashcard-saas-cab27.firebaseapp.com",
  projectId: "flashcard-saas-cab27",
  storageBucket: "flashcard-saas-cab27.appspot.com",
  messagingSenderId: "384135495882",
  appId: "1:384135495882:web:3468856811e67ce442b433",
  measurementId: "G-206GSGR48M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;