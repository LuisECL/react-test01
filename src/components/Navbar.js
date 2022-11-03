import React from "react";
import "./Navbar.scss"

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav>
        <span>LOGO</span>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar