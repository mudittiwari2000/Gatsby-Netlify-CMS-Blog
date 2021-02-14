import React, { useState } from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/brand-logo.png';

const Navbar = (props) => {
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  const toggleHamburger = () => {
    setActive((prev) => {
      !prev ? setNavBarActiveClass('is-active') : setNavBarActiveClass('');
      return !prev;
    });
  };

  return (
    <nav
      className="navbar is-transparent flex-space-between"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
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
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" activeClassName="active-navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" activeClassName="active-navbar-item" to="/contact">
              Resources
            </Link>
            <Link className="navbar-item" activeClassName="active-navbar-item" to="/contact">
              Business Software
            </Link>
            <Link className="navbar-item" activeClassName="active-navbar-item" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
