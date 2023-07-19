'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { writeUserData } from '../pages/index'
import { checkDataExistence } from './checkUser';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import Button from 'react-bootstrap/Button';
  
function Page() {
    const [emailToCheck, setEmailToCheck] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [userId, setUserId] = useState(() => {
        const hasBeenReset = localStorage.getItem('hasBeenReset');
        //     if (hasBeenReset) {
        //         return 0; // Reset the count to 0
        //     } else {
        //         const storedUserId = localStorage.getItem('userId');
        //         return storedUserId ? parseInt(storedUserId) : 0;
        //     }
        // });

        const storeduserId = localStorage.getItem('userId');
        return storeduserId ? parseInt(storeduserId) : 0;
    });

    
    useEffect(() => {
        localStorage.setItem('userId', userId.toString());
    }, [userId])
    const handleForm = async (event) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        event.preventDefault()
        const { result, error } = await (email, password);
        if (error) {
            alert("error");
        }
        const user = { email, password };
        const resultCheck = await checkDataExistence('users', 'email', emailToCheck);
        if (resultCheck) {
            alert("exist! please sign in")
            window.location.reload();
        } else {
            alert("You have successfully registered!")
            setUserId((prevUserId) => prevUserId + 1);
            writeUserData(userId.toString(), emailToCheck, password);
            return router.push("listOrders");
        }

    }
    return (<div className="wrapper" style={{ color: 'chocolate' }}>
        <div className="form-wrapper" style={{ color: 'chocolate' }}>
            <h1 className="mt-60 mb-30">Sign up</h1>
            <form onSubmit={handleForm} className="form" >
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmailToCheck(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>
    );
}
export default Page;