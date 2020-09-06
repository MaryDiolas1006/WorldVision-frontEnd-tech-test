import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import CreateProduct from './components/CreateProduct';
import EditForm from './components/EditForm';
import Product from './components/Product';
import CartForm from './components/CartForm';
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
      <Route path='/create'>
      <CreateProduct />
      </Route>

       <Route path='/edit'>
      <EditForm />
      </Route>

      <Route path='/cart'>
      <CartForm />
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

      <Route path="/">
       <Product />
      </Route>

      </Switch>
      </Router>
    );
  }


export default App;