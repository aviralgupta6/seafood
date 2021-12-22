// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlRZhoYGXosReb4jRu28T6V5xX2WnKC6U",
  authDomain: "app1-280314.firebaseapp.com",
  projectId: "app1-280314",
  storageBucket: "app1-280314.appspot.com",
  messagingSenderId: "940456452749",
  appId: "1:940456452749:web:f839873fa08a280d5078c4",
  measurementId: "G-GZEBZC07TH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = firebase.firestore();
