import React, { useState, useEffect } from 'react';
import SignInComponnent from "../firebase/signIn";
import SignUpComponnent from '../firebase/signUp';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';

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

export const writeUserData = async (userId, email, password) => {
    const docRef = doc(db, "users", userId);
    const data = {
        email,
        password
    }
    setDoc(docRef, data);
};

// export const retrieveData = async () => {
//     const usersRef = db.collection('users').doc('SF');
//     const doc = await usersRef.get();
//     if (!doc.exists) {
//         alert('No such document!');
//     } else {
//         alert('Document data:', doc.data());
//     }
// }

const Enrollment = () => {
  
    const [showSignIn, setShowSignIn] = useState(false)
    const [showSignUp, setshowSignUp] = useState(false);
    return (
        <>
            <div style={{
                backgroundColor: 'beige',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <h1 style={{ color: 'chocolate' }}>Welcome to the orders site</h1>
                <h2>
                    <button style={{ backgroundColor: 'chocolate', color: 'white' }} onClick={() => setShowSignIn(true)}>sign in</button>
                    <button style={{ backgroundColor: 'chocolate', color: 'beige' }} onClick={() => setshowSignUp(true)}>sign up</button>
                    {showSignIn && <SignInComponnent />}
                    {showSignUp && <SignUpComponnent />}

                </h2>

            </div>
        </>
    );
}

export default Enrollment;