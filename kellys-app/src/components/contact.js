import React from 'react';
import Navigation from './navigation';

import '../css/contact.css';
 
{/* <script src="JavaScript/functions.js"></script> */}

const Contact = () => {
    return (
       <div>
            <Navigation />
            <main class="containerColumn">
                <h4>Get in touch with me!</h4>
                <form className="formLeft" name="contactForm">
                    <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" />
                    <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" name="phoneNumber" placeholder="(xxx) xxx-xxxx" />
                    <label htmlFor="Email">Email Adress</label>
                        <input type="email" name="email" placeholder="yourname@domain.com" />
                    <label htmlFor="contactPreference">How would prefer I reply to you?</label>
                        <select name="contactPreference">
                            <option value="Phone">Phone</option>
                            <option value="Email">Email</option>
                            <option value="SMS">SMS</option>
                        </select>
                    <label htmlFor="subject">Message Subject</label>
                        <input type="text" name="subject" placeholder="One or two words please!" />
                    <label htmlFor="message">Write your message below</label>
                        <textarea className="textAreaFormatted" rows={10} cols={40} name="message" placeholder="I wanted to tell you..." defaultValue={""} />
                    <input type="submit" defaultValue="Submit" className="buttonGeneral" onclick="validateContactForm()" />
                </form>
            </main>
       </div>
    );
}
 
export default Contact;