import React, {useState} from 'react';
import Login from './components/Login';
import Register from './components/Register';
import CreateProduct from './components/CreateProduct';
import SingleProduct from './components/SingleProduct';
import EditForm from './components/EditForm';
import Product from './components/Product';
import Cart from './components/Cart';
import Transaction from './components/Transaction';
import TransactionSingle from './components/TransactionSingle';
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

      <Route exact path="/">
       <Product />
      </Route>

      <Route path='/create'>
      <CreateProduct />
      </Route>

       <Route path='/cart'>
      <Cart />
      </Route>

      <Route exact path='/transactions'>
      <Transaction />
      </Route>

       <Route exact path='/transactions/:id'>
      <TransactionSingle />
      </Route>

      <Route exact path='/products/:id'>
      <SingleProduct />
      </Route>

      <Route exact path='/products/:id/edit'>
      <EditForm />
      </Route>

      </Switch>
      </Router>
    );
  }


export default App;