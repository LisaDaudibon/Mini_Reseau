import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/img/books.png';
import Logout from '../components/atoms/logout';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ paddingLeft: '5px' }}>
        <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto', marginRight: '75px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            
            
              <li className="nav-item">
                <button className="btn btn-primary" onClick={Logout}>
                  Logout
                </button>
              </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
