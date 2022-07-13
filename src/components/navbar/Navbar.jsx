import React from 'react';
import "./navbar.scss";

import {Link} from 'react-router-dom';
import logo from "../../img/Group 1317744.svg";

const Navbar = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-nav  ">
      <div className="container d-flex">
      <img src={logo} alt="" style={{width:"80px"}} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 ms-auto mb-lg-0 color-light ">
            <li className="nav-item ">
              <a className="nav-link " aria-current="page"><Link to="/">خانه</Link></a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " aria-current="page"><Link to="/blog">بلاگ</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page"><Link to="/about">درباره ما</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page"><Link to="/questions">سوالات متداول</Link></a>
            </li>
        
      
          </ul>
          <button className="nav-btn">
            <a className="nav-link flex-end" aria-current="page"><Link to="/Accidents">پیگیری تصادفات</Link></a>
            </button>
        </div>
      
      </div>
    </nav>

    );
};

export default Navbar;