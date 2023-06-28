import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container grid gap-6 lg:grid-cols-[2fr_repeat(3,1fr)] text-center lg:text-start">
          <div className="footer-item">
            <Link to={"/"} className="navbar-brand">
              Games<span>HUB</span>
            </Link>
            <p className="para-text">
              Discover the world of popular games across various categories,
              handpicked for your enjoyment. From action and adventure to
              strategy and sports, we've got it all. Explore our extensive
              collection and find the perfect game that matches your
              preferences.
            </p>
          </div>

          <div className="footer-item">
            <h5 className="footer-item-title">quick link</h5>
            <ul className="footer-item-links">
              <li>
                <a href="#">Gaming</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Social Network</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h5 className="footer-item-title">supports</h5>
            <ul className="footer-item-links">
              <li>
                <a href="#">Settings & Privacy</a>
              </li>
              <li>
                <a href="#">Help & Support</a>
              </li>
              <li>
                <a href="#">Live Actions</a>
              </li>
              <li>
                <a href="#">Our News</a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h5 className="footer-item-title">newsletter</h5>
            <p className="para-text">
              Subscribe our newsletter to get our latest update & news
              consectetur
            </p>

            <form className="newsletter-form mt-4" id="form-email">
              <div className="input-group">
                <input
                  id="email"
                  autoComplete="true"
                  type="text"
                  className="input-group-field outline-none"
                  placeholder="Your email address"
                />
                <button className="input-group-btn " type="submit">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
