// import { initializeApp } from "firebase/app";
// import { getApps } from "firebase/app";
// import { getDatabase, ref, set /} from 'firebase/database'
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBI8uNmgtfKks8JR7EQznSiTIg2HBEPYXI",
  authDomain: "orders-91025.firebaseapp.com",
  projectId: "orders-91025",
  storageBucket: "orders-91025.appspot.com",
  messagingSenderId: "722773717214",
  appId: "1:722773717214:web:0faa7d1a39192b3367d24f",
  measurementId: "G-3N85XGDSCM"
};
firebase.initializeApp(firebaseConfig);

export async function writeUserData(userId:any, email:any, password:any) {
  // const userRef = firebase.firestore().collection("users").add()
  firebase.firestore().collection("users").doc(userId).set(({
    email,
    password,
  }))
}
// writeUserData("3","k.m15@gmail.com","1546")