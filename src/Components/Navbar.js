import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import Header from "./Header";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">

        
        <img src="LOGO.png" alt="Logo" className="logo"  />
        
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>

        <div className="icons-container">
          <FaMicrophone className="icon" />
          <IoMdVideocam className="icon" />
          <IoIosNotifications className="icon" />
          <button className="sign-in-button">Sign in</button>
        </div>
      </nav>

      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Navbar;
