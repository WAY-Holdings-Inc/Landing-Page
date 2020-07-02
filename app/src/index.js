import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Import components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Start from './components/Start/Start';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';
import Footer from './components/Footer/Footer';

import * as serviceWorker from './serviceWorker';

// Import scroll wrapper
import ScrollToTopRoute from './scrollToTop';

// Enable Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const routing = (
  <Router>
    <Header />
    <Switch>
      <ScrollToTopRoute exact path="/" component={Home} />
      <ScrollToTopRoute path="/about" component={About} />
      <ScrollToTopRoute path="/contact-us" component={Contact} />
      <ScrollToTopRoute path="/get-started" component={Start} />
      <ScrollToTopRoute path="/privacy" component={Privacy} />
      <ScrollToTopRoute path="/terms" component={Terms} />
      <ScrollToTopRoute component={Home} />
    </Switch>
    <Footer />
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
