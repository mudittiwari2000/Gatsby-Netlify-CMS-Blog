import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../img/brand-logo.png';

import './all.scss';

const Navbar = (props) => {
  const [, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  const toggleHamburger = () => {
    setActive((prev) => {
      !prev ? setNavBarActiveClass('is-active') : setNavBarActiveClass('');
      return !prev;
    });
  };

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item brand" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: '12em' }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div className="navbar-end has-text-centered">
            <Link
              className="navbar-item"
              activeClassName="active-navbar-item"
              to="/"
            >
              Home
            </Link>
            <Link
              className="navbar-item"
              activeClassName="active-navbar-item"
              to="/blog"
            >
              News &amp; blogs
            </Link>
            <Link
              className="navbar-item"
              activeClassName="active-navbar-item"
              to="/softwares"
            >
              Business Softwares
            </Link>
            <Link
              className="navbar-item"
              activeClassName="active-navbar-item"
              to="/resources"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
