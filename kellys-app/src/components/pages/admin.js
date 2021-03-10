import React, { useState } from 'react';

const AdminPage = () => {
    return (
        <div>
             <main class="containerColumn">
             <h4>Log in</h4>
                 {/* <form className="formLeft" name="loginForm" onSubmit={loginSubmit}>
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
                 </form> */}
             </main>
        </div>
     );
 }
  
 export default AdminPage;