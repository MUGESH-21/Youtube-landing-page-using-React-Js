import React, { useState } from "react";
import "./Header.css";
import { FaHome, FaInfoCircle, FaEnvelope, FaServicestack } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="toggle-button">
        <GiHamburgerMenu />
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <FaHome />
            {isOpen && <span>Home</span>}
          </li>
          <li>
            <FaInfoCircle />
            {isOpen && <span>Shorts</span>}
          </li>
          <li>
            <FaEnvelope />
            {isOpen && <span>Mail</span>}
          </li>
          <li>
            <FaServicestack />
            {isOpen && <span>Setting</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
