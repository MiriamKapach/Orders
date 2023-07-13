import React, { useState, useEffect } from 'react'
import SignInComponnent from "../firebase/signIn";
import SignUpComponnent from '../firebase/signUp'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';



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

// async function writeUserData(userId, email, password) {
//     const docRef = await addDoc(collection(db, "users"), {
//         email,
//         password
//     });
//     alert("scsess writeUserData");
// }

export default function Enrollment() {
    
    const [showSignIn, setShowSignIn] = useState(false)
    const [showSignUp, setshowSignUp] = useState(false)

    // const writeUserData = async (userId, email, password) => {
    //         await firebase.firestore().collection('users').doc(userId).set({
    //         // await db.collection('users').doc(userId).set({
    //             email,
    //             password
    //         });
    //         alert("scsess writeUserData");
    // };

    // if(ShowSignIn.isAuthenticated()){
    //     alert("Authenticated")
    // }

    // firebase.firestore().collection("users")
    //     .doc(Fire.shared.userId)
    //     .update({ Ticket: firebase.firestore.FieldValue.arrayUnion(userId) })
    //     .then(() => {
    //         alert('Get success')
    //     });

    // async function writeUserData(userId, email, password) {
    //     const docRef = await addDoc(collection(db, "users"), {
    //         email,
    //         password
    //     });
    // }
    // useEffect(() => {
    //     (async () => {
    //         await writeUserData("3", "email", "password")
    //     })()
    // }, [])

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
