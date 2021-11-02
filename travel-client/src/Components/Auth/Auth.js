import React, {useState} from 'react';
import './auth.css';
const Auth = (props) => {

    console.log(props);
    const [username, setUsername]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [login, setLogin]= useState(true);
    const title = () =>{
        return !login ? 'Signup' : 'Login'
    }
    const loginToggle = (e) =>{
        e.preventDefault();
        setLogin(!login)
        setEmail('');
        setPassword('');
        setUsername('');
    }
            const signupFields = () => !login ?
            (
            <div>
            <label htmlFor="email">Email:</label>
            <br/>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        ) : null;
        const handleSubmit = event => {
        event.preventDefault();
            let reqBody = login ?

            {
                user: {
                    username: username,
                    password: password,
                }
        }:
        {
            user: {
                username: username,
                email: email,
                password: password
            }
        }
        console.log(login);
        let url = login ?
        'http://localhost:3000/user/login':
        'http://localhost:3000/user/register';
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: new Headers({
                'Content-Type':'application/json'
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let token = data.sessionToken;
            localStorage.setItem('SessionToken', token);
        })
        .catch(err => console.log(err))
}
    return(
        <div>
        <form>
            <h1>{title()}</h1>
            {signupFields()}
            <label htmlFor="username">User Name</label>
            <br/>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button type="button" onClick={loginToggle}>Login / Signup </button>

            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    )}
export default Auth;
