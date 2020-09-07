import React, {useState} from 'react';
import Login from './components/Login';
import Register from './components/Register';
import CreateProduct from './components/CreateProduct';
import SingleProduct from './components/SingleProduct';
import EditForm from './components/EditForm';
import Product from './components/Product';
import Cart from './components/Cart';
import TransactionForm from './components/TransactionForm';
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
      <Route path='/view'>
      <SingleProduct />
      </Route>

       <Route path='/edit'>
      <EditForm />
      </Route>

      
      <Route path='/transactions'>
      <TransactionForm />
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

      </Switch>
      </Router>
    );
  }


export default App;