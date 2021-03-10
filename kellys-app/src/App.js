// Timeout on login
// animate Home Name to look like it was written
// dark mode button?
// hamburger menu for nav when switching to mobile
// auto hide password, add button to show

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import './App.css';

import Home from './components/pages/home';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import LoginPage from './components/pages/login';
import Submissions from './components/pages/submissions';
import AdminPage from './components/pages/admin';
import SecureRoute from './components/shared/secureRoute';
import Navigation from './components/shared/navigation'
import Footer from './components/shared/footer';
import Error from './components/shared/error';

library.add(fab, faArrowRight)

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/contact' component={Contact}/>  
          <Route path='/login' component={LoginPage}/>
          <SecureRoute path="/admin/submissions">
            <Navigation />
            <Submissions />
          </SecureRoute>       
          <SecureRoute path="/admin">
            <Navigation />
            <AdminPage />
          </SecureRoute> 
          <Route component={Error}/>
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
