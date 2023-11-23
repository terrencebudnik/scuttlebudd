import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOmu9yl89POX3BfdHgTJzAmi3tazfS_DE",
    authDomain: "scuttlebudd-4ff87.firebaseapp.com",
    projectId: "scuttlebudd-4ff87",
    storageBucket: "scuttlebudd-4ff87.appspot.com",
    messagingSenderId: "632064439497",
    appId: "1:632064439497:web:cffcb165184b74236b4918"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);