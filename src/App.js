import React from 'react';
import './App.css';
import Header from './components/Header'
import Event from './components/Event'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EventSended from './components/EventSended'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Event} />
          <Route path='/created' component={EventSended} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
