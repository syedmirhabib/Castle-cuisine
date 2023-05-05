import React from "react";
import "./Footer.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">About Castle Cousine</h2>
            <p className="description">
              Castle Cousine is a recipe sharing platform created to connect
              food enthusiasts and home chefs. We believe that cooking is a
              universal language and want to help people share their passion for
              food with others.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 text-left">
            <h3 className="footer-title">Contact Us</h3>
            <p>
              Email: info@castlecousine.com
              <br />
              Phone: +1-555-123-4567
            </p>
          </div>
          <div className="col-md-6 text-right">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/chefspalette"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/chefspalette"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/chefspalette"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="credits">
              Designed & Developed by Syed Mir Habib
              <br />
              &copy; {year} Castle Cousine. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
