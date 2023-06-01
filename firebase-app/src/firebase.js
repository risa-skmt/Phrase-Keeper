import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAz8Xp94Mmzmr6NOHR2Sux2pgmJcgO1aLk",
    authDomain: "phrase-keeper-cf626.firebaseapp.com",
    projectId: "phrase-keeper-cf626",
    storageBucket: "phrase-keeper-cf626.appspot.com",
    messagingSenderId: "749924070317",
    appId: "1:749924070317:web:a4e39c8ce27abdf8e1a724"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const firebaseDB = getFirestore(app);


export default firebaseDB;