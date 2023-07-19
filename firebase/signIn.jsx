'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { checkDataExistence } from './checkUser';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { checkPassword } from './checkUser';


function Page() {
    const [emailToCheck, setEmailToCheck] = useState('')
    const [passwordToCheck, setPasswordToCheck] = useState('')
    const router = useRouter('')
    const handleForm = async (event) => {
        event.preventDefault()
        // const { result, error } = await (emailToCheck, password);
        // if (error) {
        //     return console.log(error)
        // }
        // console.log(result)
        // const user = { email, password };
        const resultCheck = await checkDataExistence('users', 'email', emailToCheck);
        const resultPass = await checkPassword('users', 'password',passwordToCheck)
        // alert(JSON.stringify(resultCheck));
        if (resultCheck) {
            if (resultPass) {
                return router.push("listOrders")
            } else {
                alert("the password is wrong!")
            }
        } else {
            alert("You are not registered, please sign up")
            window.location.reload();
        }
        // const auth = getAuth();
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //     });

    }
    return (<div className="wrapper" style={{ color: 'chocolate' }}>
        <div className="form-wrapper" style={{ color: 'chocolate' }}>
            <h1 className="mt-60 mb-30">Sign In</h1>
            <form onSubmit={handleForm} className="form">
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(ev) => setEmailToCheck(ev.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(ev) => setPasswordToCheck(ev.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button style={{ color: 'chocolate' }} type="submit">Sign In</button>
            </form>
        </div>
    </div>
    );
}
export default Page;
