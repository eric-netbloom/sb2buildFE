import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/sb2-build-logo.png';
import { FaPhoneAlt, FaBars } from "react-icons/fa";

export default function Header() {

  const [showNav, setShowNav] = useState(false)
  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  return (
    <header>
      <div className="main-bar">
        <div className="main-content">
          <div className="navbar">
            <div className="nav-left">
              <Link to="/"><img src={Logo} alt="Sb2build Logo" className="logo"/></Link>
            </div>
            <div className="nav-right">
                <nav className={`${showNav && 'active'}`}>
                    <ul className="main-nav parent">
                        <li onClick={handleShowNav}>
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={handleShowNav} className="has-submenu about">
                            <Link to="/home-building-companies-dunedin">About</Link>
                            <ul className="submenu">
                              <li onClick={handleShowNav}>
                                <Link to="/recommended-builder-dunedin">Testimonials</Link>
                              </li>
                            </ul>
                        </li>
                        <li onClick={handleShowNav} className="has-submenu services">
                            <Link to="/services">Services</Link>
                            <ul className="submenu">
                              <li onClick={handleShowNav}>
                                <Link to="/build-grand-designs">Grand Designs</Link>
                              </li>
                              <li onClick={handleShowNav}>
                                <Link to="/house-builders-dunedin">New Builds</Link>
                              </li>
                              <li onClick={handleShowNav}>
                                <Link to="/home-renovations-dunedin">Renovation/Extension</Link>
                              </li>
                              <li onClick={handleShowNav}>
                                <Link to="/commercial-builder-dunedin">Commercial</Link>
                              </li>
                            </ul>
                        </li>
                        <li onClick={handleShowNav}>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li onClick={handleShowNav}>
                            <Link to="/bathroom-renovations-dunedin">Enquire</Link>
                        </li>
                        <li onClick={handleShowNav}>
                            <Link to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <a href={"tel:+64274797532"} className="redButton btn"><FaPhoneAlt/> 027 479 7532 </a>
                <div onClick={handleShowNav} className="burger-menu mobile"> <FaBars/> </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}