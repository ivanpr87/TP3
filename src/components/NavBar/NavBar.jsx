import React from 'react';
import CartWidget from '../CartWidget/CartWidget'; 
import { Link } from 'react-router-dom';





const NavBar = () => {
  return (
    <div className='Menu'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <Link to='/'>
            <li className="nav-item">
              <p className="nav-link active" href="#">Home
                <span className="visually-hidden">(current)</span>
              </p>
            </li>
            </Link>
          <Link to='/category/fruta'>  <li className="nav-item">
              <p className="nav-link" href="#">Frutas</p>
            </li></Link>
            <Link to='/category/verdura'>
            <li className="nav-item">
              <p className="nav-link" to="/">Verduras</p>
            </li>
            </Link>
            
          </ul>
          <div className='colorLetra'>
          <Link className='Underline' to="/cart"><CartWidget /></Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
);
};


export default NavBar;

