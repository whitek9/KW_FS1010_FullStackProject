import React, { useState } from 'react';
import Navigation from '../shared/navigation';

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const formSubmit = async event => {
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
    }

    return (
       <div>
            <Navigation />
            <main class="containerColumn">
            <h4>Log in</h4>
                <form className="formLeft" name="contactForm" onSubmit={formSubmit}>
                    <label htmlFor="Email">Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="yourname@domain.com" 
                            required
                            value={email} 
                            onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="Password">Your Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            required 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} />
                    <input 
                        type="submit" 
                        defaultValue="Submit" 
                        className="buttonGeneral" />
                </form>
            </main>
       </div>
    );
}
 
export default LoginPage;