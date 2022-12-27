// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrZz2hrtvN0GPdSBnUCMwJMuJaT97uNW8",
  authDomain: "ordinary-word.firebaseapp.com",
  projectId: "ordinary-word",
  storageBucket: "ordinary-word.appspot.com",
  messagingSenderId: "618181567994",
  appId: "1:618181567994:web:dc02b7c5de12db648f7043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default getDatabase(app);