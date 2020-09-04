import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Product from './components/Product';
import MainNav from './components/MainNav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 

const App = () => {
    return (
      <Router>
       <MainNav />
      <Switch>

      <Route path='/register'>
        <Register />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path="/">
       <Product />
      </Route>

      </Switch>
      </Router>
    );
  }


export default App;