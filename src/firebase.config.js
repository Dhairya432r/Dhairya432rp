// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCfzKIjPK_Umsovdp9Fpo_1FgCsap4arDE",
  authDomain: "addo-pet-b602e.firebaseapp.com",
  projectId: "addo-pet-b602e",
  storageBucket: "addo-pet-b602e.appspot.com",
  messagingSenderId: "718058149543",
  appId: "1:718058149543:web:bc2ca23357430f2067ed82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
