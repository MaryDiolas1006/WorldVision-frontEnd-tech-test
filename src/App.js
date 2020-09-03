import React from 'react';
import Login from './components/Login';
import Product from './components/Product';
import MainNav from './components/MainNav';

const App = () => {
    return (
      <div>
      <MainNav />
        <Login />
        <Product />
      </div>
    );
  }


export default App;