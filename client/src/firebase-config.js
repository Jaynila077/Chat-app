// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANurJvbYGzkaFAjzdkz_IjTlf4LUp0Jv8",
  authDomain: "chat-app-7bc9a.firebaseapp.com",
  projectId: "chat-app-7bc9a",
  storageBucket: "chat-app-7bc9a.appspot.com",
  messagingSenderId: "944626019395",
  appId: "1:944626019395:web:437fba4f320508d93eb8f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();