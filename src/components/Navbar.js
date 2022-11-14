import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../App";
import "./Navbar.scss"

const NavBar = () => {
  const {darkMode, setDarkMode} = useContext(DarkModeContext)

  function handleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`nav-container ${darkMode? "dark" : ""}`}>
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
          <button onClick={handleDarkMode}>Dark Mode</button>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar