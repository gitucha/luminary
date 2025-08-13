// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMFjDBW7FIrU4tIUAssnmZ1qNCVkXBh9M",
  authDomain: "luminary-quiz.firebaseapp.com",
  projectId: "luminary-quiz",
  storageBucket: "luminary-quiz.firebasestorage.app",
  messagingSenderId: "312779484840",
  appId: "1:312779484840:web:73ec3432b97731126bdc9d",
  measurementId: "G-V9KX3RKLVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);