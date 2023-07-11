import { useRouter } from 'next/navigation'
import user from './signIn.jsx'

export default function check(user:any){
    const users=getUsers();
    alert(user)
    let existUser= users.map((u)=> u.email ==user.email && u.password == user.password)
    if(existUser){
        const router = useRouter();
        return router.push("listOrders")
    }
}
function getUsers(){
    return [{userId: "1234",email: "t41258@gmail.com",password:2452},
    {userId: "863",email: "bbb@jdf",password:895638},
    {userId: "653",email: "dee@jdf",password:12345} ]

}