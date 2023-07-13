'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import check from './checkUser'
// import writeUserData from '../pages/index'

function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [users, setUsers] = useState([]);
    const handleForm = async (event) => {
        let userId=0;
        event.preventDefault()
        const { result, error } = await (email, password);
        // if (error) {
        //     return console.log(error)
        // }
        const user = { email, password };
        if (check(user)) {
            alert("exist! please sign in")
            window.location.reload();
        } else {
            alert("sucsses")
            setUsers([...users,user]);
            alert(JSON.stringify(users))
            userId=userId+1;
           // await writeUserData(userId,email,password);
            return router.push("listOrders");
        }
        
    }
    return (<div className="wrapper">
        <div className="form-wrapper">
            <h1 className="mt-60 mb-30">Sign up</h1>
            <form onSubmit={handleForm} className="form" >
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
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