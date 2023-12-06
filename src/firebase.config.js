// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ-5n-Hmnk1OcaRszNEo1rKaA8nLhNj3E",
  authDomain: "brandzi-form.firebaseapp.com",
  projectId: "brandzi-form",
  storageBucket: "brandzi-form.appspot.com",
  messagingSenderId: "584024213601",
  appId: "1:584024213601:web:b25f897e88360f88384220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
