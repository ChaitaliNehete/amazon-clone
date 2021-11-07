import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
//components
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
