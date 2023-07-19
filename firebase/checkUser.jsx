import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBI8uNmgtfKks8JR7EQznSiTIg2HBEPYXI",
    authDomain: "orders-91025.firebaseapp.com",
    projectId: "orders-91025",
    storageBucket: "orders-91025.appspot.com",
    messagingSenderId: "722773717214",
    appId: "1:722773717214:web:0faa7d1a39192b3367d24f",
    measurementId: "G-3N85XGDSCM"
};
const app = initializeApp(firebaseConfig);

export const checkDataExistence = async (users, email, emailToCheck) => {
    try {
      const db = getFirestore(app);
      const collectionRef = collection(db, users);
      const q = query(collectionRef, where("email", "==", emailToCheck));
      const docSnap = await getDocs(q);
      let snapshotData;
      if (!docSnap.empty) {
        snapshotData = docSnap.docs[0].data();
        console.log(snapshotData);
      } else {
        console.log('No matching documents found.');
      }
      return !docSnap.empty;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  export const checkPassword = async (users,password,passwordToCheck) => {
    try {
      const db = getFirestore(app);
      const collectionRef = collection(db, users);
      const q = query(collectionRef, where("password", "==", passwordToCheck));
      const docSnap = await getDocs(q);
      let snapshotData;
      if (!docSnap.empty) {
        snapshotData = docSnap.docs[0].data();
        console.log(snapshotData);
      } else {
        console.log('No matching documents found.');
      }
      return !docSnap.empty;
    } catch (error) {
      console.log(error);
      return false;
    }
  };