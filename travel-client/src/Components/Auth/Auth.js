import React, {useState} from 'react';
import './auth.css';

const Auth = (props) => {

    const [userName, setUserName]= useState('');
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
        setUserName('');
    }
         const signupFields = () => !login ?
         (
             <div>
            <label htmlFor="Email">Email:</label>
            <br/>
            <input type="text" id="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
             </div>
         ) : null;
         const handleSubmit = event => {
             event.preventDefault();
            let reqBody = login ?
            {
            userName: userName,
            password: password,
        }:
        {
          userName: userName,
          email: email,
          password: password
        }
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
        .then(json => props.updateLocalStorage(json.token))
        .catch(err => console.log(err))
         }
    return(
        <div>
        <form>
            <h1>{title()}</h1>
            {signupFields()}
            <label htmlFor="username">User Name</label>
            <br/>
            <input type="text" id="username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button type="button" onClick={loginToggle}>Login / Signup Toggle</button>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    )}
export default Auth;