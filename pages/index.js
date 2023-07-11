//import SignIn from '@/firebase/signIn'
import SignUpComponnent from '@/firebase/signUp'
import Link from 'next/link'
import './listOrders.js'
import { useState } from 'react'
import SignInComponnent from "../firebase/signIn";

export default function enrollment() {
   
    const [showSignIn,setShowSignIn] = useState(false)
    const [showSignUp,setshowSignUp] = useState(false)
    return (
        <>
            <h1>Welcome to the orders site</h1>
            <h2>
                <button onClick={() =>setShowSignIn(true)}>sign in</button>
                <button onClick={() => setshowSignUp(true)}>sign up</button>
                {showSignIn && <SignInComponnent/>}
                {showSignUp && <SignUpComponnent/>}
            </h2>
        </>
    )
}