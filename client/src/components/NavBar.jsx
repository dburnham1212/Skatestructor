import React from "react";

const NavBar = () => {
  return(
    <nav className="navbar navbar-expand-md navbar-light bg-dark py-4">
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
              <a className="nav-link text-light" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;