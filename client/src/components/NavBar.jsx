import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";

const NavBar = () => {
  const {
    authenticated
  } = useContext(authContext);

  return(
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-dark py-4">
      <div className="container-fluid">
        <a className="navbar-brand text-light px-4" href="#">Skatestructor</a>
        <button 
          className="navbar-toggler bg-light mx-4" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-4" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Profile</a>
            </li>
          </ul>
          {authenticated ? 
          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">Logout</Link>
            </li>
          </ul>
          :
          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/register">Register</Link>
            </li>
          </ul>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar;