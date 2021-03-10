import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import Navigation from '../shared/navigation';

const LoginPage = () => {
// loginSubmit function leveraged from example-master file provided in the sample from the course material

    let history = useHistory()
    let location = useLocation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
            document.getElementById('loginError').innerHTML = payload.message
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/admin" } };
            history.replace(from);
        }
    }

    return (
       <div>
            <Navigation />
            <main class="containerColumn">
            {!auth && 
                <div>
                    <p><span className='red' id='loginError'></span></p>
                </div>
            }
            <h4>Log in</h4>
                <form className="formLeft" name="loginForm" onSubmit={loginSubmit}>
                    <label htmlFor="Email">Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="yourname@domain.com" 
                            required
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            autoFocus
                        />
                    <label htmlFor="Password">Password</label>
                        <input 
                            type="text" 
                            name="name" 
                            required 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                        />
                    <input 
                        type="submit" 
                        defaultValue="Sign In" 
                        className="buttonGeneral" 
                    />
                </form>
            </main>
       </div>
    );
}
 
export default LoginPage;