import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const MainNav = (props) => {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">PushCart</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
        {/*Admin Dropdown*/}

        <li className="nav-item dropdown">
          <a 
            id="adminDropdown" 
            href="" 
            className="nav-link dropdown-toggle" 
            role="button" 
            data-toggle="dropdown">Admin</a>
            <div className="dropdown-menu">
              <NavLink className="dropdown-item" to="/create">Add Product</NavLink>
            </div>
        </li>
                       
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Product</NavLink>
      </li>
    </ul>

    {/*Right Side Of Navbar*/}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/transactions">Transactions</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" exact to="/cart">Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/logout">Logout</NavLink>
        </li>
      </ul>
  </div>
</nav>

  )
}

export default MainNav;