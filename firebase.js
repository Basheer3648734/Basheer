import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCU9miEOu3JXtXD1C13k9YsFDNEhNiE9IE",
  authDomain: "basheer-568df.firebaseapp.com",
  projectId: "basheer-568df",
  storageBucket: "basheer-568df.appspot.com",
  messagingSenderId: "557515998310",
  appId: "1:557515998310:web:60e58a1d08152a0d5359a7",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
