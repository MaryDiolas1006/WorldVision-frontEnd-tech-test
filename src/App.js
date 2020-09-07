import React, {useState} from 'react';
import Login from './components/Login';
import Register from './components/Register';
import CreateProduct from './components/CreateProduct';
import SingleProduct from './components/SingleProduct';
import EditForm from './components/EditForm';
import Product from './components/Product';
import Cart from './components/Cart';
import Transaction from './components/Transaction';
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

       <Route path='/edit'>
      <EditForm />
      </Route>

      <Route path='/register'>
        <Register />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route exact path="/">
       <Product />
      </Route>

      <Route path='/create'>
      <CreateProduct />
      </Route>

       <Route path='/cart'>
      <Cart />
      </Route>

      <Route path='/transactions'>
      <Transaction />
      </Route>

      <Route path='/products'>
      <SingleProduct />
      </Route>

      </Switch>
      </Router>
    );
  }


export default App;