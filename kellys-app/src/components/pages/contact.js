import React, { useState } from 'react';
import Navigation from '../shared/navigation';

import '../../css/contact.css';

const Contact = () => {

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
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
                <h4>Get in touch with me!</h4>
                <form className="formLeft" name="contactForm" onSubmit={formSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input 
                        id="nameEntry"
                        name="name"
                        type="text" 
                        required 
                        value={name} 
                        onChange={e => setName(e.target.value) } 
                    />

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        id="phoneNumberEntry"
                        name="phoneNumber" 
                        type="tel" 
                        placeholder="(xxx) xxx-xxxx" 
                        required
                        value={phoneNumber} 
                        onChange={e => setPhoneNumber(e.target.value) } 
                    />

                    <label htmlFor="Email">Email Address</label>
                    <input 
                        id="emailEntry"
                        name="email" 
                        type="email" 
                        placeholder="yourname@domain.com" 
                        required
                        value={email} 
                        onChange={e => setEmail(e.target.value) } 
                    />

                    <label htmlFor="content">Write your message below</label>
                    <textarea 
                        id="contentEntry"
                        name="content"
                        className="textAreaFormatted" 
                        rows={10} 
                        cols={40} 
                        placeholder="I wanted to tell you..."
                        required 
                        value={content} 
                        onChange={e => setContent(e.target.value) } 
                    />
                    
                    <input 
                        type="submit" 
                        defaultValue="Submit" 
                        className="buttonGeneral" 
                    />
                </form>
            </main>
       </div>
    );
}
 
export default Contact;