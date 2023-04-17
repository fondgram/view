import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import "./Dropdown.css";

const Dropdown = () => {
  const { lightMode } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className={"dropdown-header" + (lightMode ? " light__mode" : "")} onClick={toggleDropdown}>
        <div className="dropdown-header-title">
          <span>Jeton Sllamniku</span>
        </div>
        <span
          className={`dropdown-header-icon ${
            isOpen ? "open" : ""
          }`}
        ></span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={handleItemClick}>
            <span>Profile</span>
          </li>
          <li className="dropdown-item" onClick={handleItemClick}>
            <span>Settings</span>
          </li>
          <li className="dropdown-item" onClick={handleItemClick}>
            <span>Log Out</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
