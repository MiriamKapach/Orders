
export default function check(user) {
    let users = getUsers();
    const existUser = users.find(u => u.email == user.email && u.password == user.password);
    if (existUser != null) {
        return true;
    } else {
        return false;
    }
}
function getUsers() {
    const users = [
        { userId: "1234", email: "t41258@gmail.com", password: 2452 },
        { userId: "863", email: "bbb@jdf", password: 895638 },
        { userId: "653", email: "dee@jdf", password: 12345 }
    ];
    return users;
}