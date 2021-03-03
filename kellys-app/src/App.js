import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer'
import Error from './components/error';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/resume' component={Resume}/>
          <Route path="/contact" component={Contact}/>         
          <Route component={Error}/>
        </Switch>
        <Footer />
      </div> 
    </BrowserRouter>
  );
}

export default App;
