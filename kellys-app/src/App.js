import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/pages/home';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import LoginPage from './components/pages/login';
import Footer from './components/shared/footer'
import Error from './components/shared/error';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/contact' component={Contact}/>  
          <Route path='/login' component={LoginPage}/>       
          <Route component={Error}/>
        </Switch>
        <Footer />
      </div> 
    </BrowserRouter>
  );
}

export default App;
