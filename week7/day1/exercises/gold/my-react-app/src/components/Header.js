import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <a className="navbar-brand" href="https://mylanding.com">MyLanding</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Header;
