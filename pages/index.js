//import SignIn from '@/firebase/signIn'
import SignUpComponnent from '@/firebase/signUp'
import Link from 'next/link'
import './listOrders.js'
import { useState, useEffect } from 'react'
import SignInComponnent from "../firebase/signIn";
// import { initializeApp } from "firebase/app";
// import { getApps } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc} from 'firebase/firestore/lite';

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
const db = getFirestore(app);
export default function enrollment() {

    const [showSignIn, setShowSignIn] = useState(false)
    const [showSignUp, setshowSignUp] = useState(false)
    async function writeUserData(userId, email, password) {
        // const userRef = firebase.firestore().collection("users").add()
        const docRef = await addDoc(collection(db, "users"), {
            email,
            password
        });
    }
    useEffect(() => {
        (async () => {
            await writeUserData("3", "k.m15@gmail.com", "1546")
            })()
    }, [])
    return (
        <>
            <h1>Welcome to the orders site</h1>
            <h2>
                <button onClick={() => setShowSignIn(true)}>sign in</button>
                <button onClick={() => setshowSignUp(true)}>sign up</button>
                {showSignIn && <SignInComponnent />}
                {showSignUp && <SignUpComponnent />}
            </h2>
        </>
    )
}
