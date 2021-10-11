import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        {/* <ServiceDetails></ServiceDetails> */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
