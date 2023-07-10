import SignIn from '@/firebase/signIn'
import SignUp from '@/firebase/signUp'
import Link from 'next/link'
import './listOrders.js'
import count from '@/firebase/try'


export default function enrollment() {
    return (
        <>
        <h1 className='order'>
         to <Link href="/listOrders" >enter</Link>
        </h1>
        <h2>
        <button onClick={SignIn}>sign in</button>
        <button onClick={SignUp}>sign up</button>
        <button onClick={count}>count</button>
        </h2>
        </>
    )
}