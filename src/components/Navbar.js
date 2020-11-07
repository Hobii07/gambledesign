import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { GiCardPickup } from "react-icons/gi";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // signup render
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
          BET
          <i className="card-pick">
            <GiCardPickup />
          </i>
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sale" className="nav-links" onClick={closeMobileMenu}>
              Sale
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/buyhere" className="nav-links" onClick={closeMobileMenu}>
              Buy Token
            </Link>
          </li>

          <li>
            <Link
              to="/connect-wallet"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Connect Wallet
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--wallet">Connect Wallet</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
