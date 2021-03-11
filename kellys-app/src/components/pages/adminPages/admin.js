import React from 'react';
import { Switch, Route, useRouteMatch, NavLink, useHistory } from 'react-router-dom';

import Submissions from './submissions'
import ManageUsers from './manageUsers'

import '../../../App.css'

const AdminPage = () => {

    const { path } = useRouteMatch()

    let history = useHistory();

    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }

    return (
        <div>
             <main class="containerColumn">
                <h4>Administrator Portal</h4> 
                <nav className='inPageNav'>
                    <ul>
                        <li> <NavLink to="/admin/users">Manage Users</NavLink></li>
                        <li> <NavLink to="/admin/submissions">Check Submissions</NavLink></li>
                        <li onClick={logout}>Logout</li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={`${path}/users`}>
                        <ManageUsers />
                    </Route>
                    <Route path={`${path}/submissions`}>
                        <Submissions />
                    </Route>
                </Switch>
             </main>
        </div>
     );
 }
  
 export default AdminPage;