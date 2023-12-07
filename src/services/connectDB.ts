// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANMDqiiGxX9RCZc1ZZfrcKpFDgknexGco",
  authDomain: "react-movie-11d9b.firebaseapp.com",
  projectId: "react-movie-11d9b",
  storageBucket: "react-movie-11d9b.appspot.com",
  messagingSenderId: "496348895748",
  appId: "1:496348895748:web:7bdcbefeeee70c806fb351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;