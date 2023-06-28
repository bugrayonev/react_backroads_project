import React from "react";
import { pageLinks, socialLinks } from "../data";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      {/*   <!-- footer links --> */}
      <ul className="footer-links">
        {pageLinks.map((pageLink) => {
          return (
            <li key={pageLink.id}>
              <a href={pageLink.href} className="footer-link scroll-link">
                {pageLink.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {/*   <!-- single icon --> */}

        {socialLinks.map((link) => {
          return (
<SocialLinks key={link.id} {...link} parentClass="footer-icon"/>
            
          );
        })}
      </ul>
      {/* <!-- end of footer icons --> */}
      <p className="copyright">
        copyright &copy; backroads travel tour company <span id="date">{new Date().getFullYear()}</span>.
        all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
