import React, { useState, useEffect } from 'react';
import SignInComponnent from "../firebase/signIn";
import SignUpComponnent from '../firebase/signUp';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';
import StylePage from './style'
import Bubbles from './styleBasic';
import Settings from './settings'


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

const Enrollment = () => {

    const [showSignIn, setShowSignIn] = useState(false)
    const [showSignUp, setshowSignUp] = useState(false);
    return (
        <>
            {/* <Bubbles /> */}
            <StylePage />
            <div id="bubbles">
                {/* style={{
                backgroundColor: 'beige',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>  */}
                <div id="bubbles2"> <div id="bubbles3">
                    {/* <h1 style={{ color: 'chocolate' }}>Welcome to the orders site</h1> */}
                    <h2>
                        <button style={{ backgroundColor: 'chocolate', color: 'white' }} onClick={() => setShowSignIn(true)}>sign in</button>
                        <button style={{ backgroundColor: 'chocolate', color: 'beige' }} onClick={() => setshowSignUp(true)}>sign up</button>

                        {/* <button style={{ backgroundColor: 'chocolate', color: 'white' }} onClick={() => setShowSignIn(true)}>sign in</button>
                        <button style={{ backgroundColor: 'chocolate', color: 'beige' }} onClick={() => setshowSignUp(true)}>sign up</button> */}
                        {showSignIn && <SignInComponnent />}
                        {showSignUp && <SignUpComponnent />}

                    </h2>
                </div>

                </div>
            </div>

        </>
    );
}


export default Enrollment;