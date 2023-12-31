'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import check from './checkUser'

function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter('')
    const handleForm = async (event) => {
        event.preventDefault()
        const { result, error } = await (email, password);
        if (error) {
            return console.log(error)
        }
        console.log(result)
        if (!email, !password) {
            alert("sign up")
        } else {
            return router.push("listOrders")
        }
    }
    async function handelSignIn() {
        let user = { email, password }
        alert(email)
        await check(user);
    }
    return (<div className="wrapper">
        <div className="form-wrapper">
            <h1 className="mt-60 mb-30">Sign In</h1>
            <form onSubmit={handleForm} className="form">
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit">Sign In</button>
            </form>
        </div>

    </div>
    );
}

export default Page;
// onClick={handelSignIn()}
