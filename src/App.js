import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HeroSection from './components/HeroSection';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HeroSection} />
          <Route path='/products'  component={Products} />
          <Route path='/contact'  component={Contact} />
          <Route path='/about'  component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
