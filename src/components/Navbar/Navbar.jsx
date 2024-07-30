/* eslint-disable react/no-unescaped-entities */
import "./Navbar.css";
import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";


const Navbar = () => {
const [toggleMenu, setToggleMenu] = React.useState(false);
   return(
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <a href="#home">

      <h1 className="text-white text-lg font-black pl-14">HAVEN'S</h1>
      </a>
    </div>

    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home"> Home</a>
      </li>
      {/* <li className="p__opensans">
        <a href="#home">About</a>
      </li> */}
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#gallery">Gallery</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contacts</a>
      </li>
    </ul>

    <div className="app__navbar-login">
      <a href={`/SignIn`} className="p__opensans">
        Login
      </a>
      <div />
      {/* <a href="/" className="p__opensans">
        Book Table
      </a> */}
    </div>

    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu
        color="#fff"
        fontSize={27}
        onClick={() => setToggleMenu(true)}
        className="hamburger"
      />

{toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
        <MdOutlineRestaurantMenu
          color="#fff"
          fontSize={27}
          className="overlay__close"
          onClick={() => setToggleMenu(false)}
        />
        <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          {/* <li className="p__opensans">
            <a href="#home">About</a>
          </li> */}
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="p__opensans">
            <a href="#Contacts">Contacts</a>
          </li>
        </ul>
      </div>
)}

    </div>
  </nav>
)
}

export default Navbar;
