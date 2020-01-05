import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Application from './components/pages/Application';
import Policy from './components/pages/Policy';
import ApplicationState from './context/application/ApplicationState';

function App() {
  return (
    <ApplicationState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/application' component={Application} />
          <Route exact path='/policy' component={Policy} />
        </Switch>
      </Router>
    </ApplicationState>
  );
}

export default App;
