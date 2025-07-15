import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container-fluid">

        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="https://thumbs.dreamstime.com/b/airplane-logo-illustration-white-background-339249645.jpg"
            alt="logo"
            width="40"
            className="me-1"
          />
          <span className=" fw-bold text-brown">RouteX</span>
        </a>

        {/* Toggle button */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle= 'collapse'
          data-bs-target= '#navbarNav'
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          
          {/* Menu items */}
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">HOME▾</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">STORY▾</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link mx-2" href="#">VISA▾</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">BLOG▾</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">PAGE▾</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">CONTACT</a>
            </li>
          </ul>

          {/* Help section */}
          <div className="helpSection d-flex">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6072/6072846.png"
              alt="help"
              width="35"
              className="me-2"
            />
            <div className="text-end">
              <div className="text-muted small">Need help?</div>
              <div>9072028649</div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
