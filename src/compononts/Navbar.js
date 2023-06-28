import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

import SocialLinks from "./SocialLinks";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        {/*  <!-- nav header --> */}
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*  <!-- end of nav header --> */}
        {/*    <!-- nav links --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link scroll-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="nav-icons">

          {socialLinks.map((link) => {
            return (



              <SocialLinks key={link.id} {...link} parentClass="nav-icon"/>
            
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
