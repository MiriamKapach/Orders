import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import  Firebase from "firebase/app";
import 'Firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBI8uNmgtfKks8JR7EQznSiTIg2HBEPYXI",
  authDomain: "orders-91025.firebaseapp.com",
  projectId: "orders-91025",
  storageBucket: "orders-91025.appspot.com",
  messagingSenderId: "722773717214",
  appId: "1:722773717214:web:acb2b00def0269db67d24f",
  measurementId: "G-YVRF3EPL40"
};
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

const firestore = getFirestore();
export {firestore};

export const app = initializeApp(firebaseConfig);
export const initFirebase = () => {
  return app;
}
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
