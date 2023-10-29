import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import { showSuccessToast } from "../../NotificationUtils";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const logout = () => {
    sessionStorage.clear()
    showSuccessToast("You're logged out successfully!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {
          sessionStorage.getItem("usersName") != null ? (
            <div className="dropdown-header-title">
              <span>{`${sessionStorage.getItem("usersName") != null ? sessionStorage.getItem("usersName") : ""} ${sessionStorage.getItem("usersLastName") != null && window.innerWidth > 810 ? sessionStorage.getItem("usersLastName") : ""}`}</span>
              <span className={`dropdown-header-icon ${isOpen ? "open" : ""}`}></span>
            </div>
          ) :
            <div className="dropdown-header-title">
              <Link to="/login" style={{ textDecoration: "none", color: "inherit", fontSize: '14px' }}>LOGIN</Link>
            </div>
        }
      </div>
      {sessionStorage.getItem("usersName") != null && isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={handleItemClick}>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>Profile</span>
            </Link>
          </li>
          <li className="dropdown-item" onClick={handleItemClick}>
            <Link
              to="/wishlist"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span >Wishlist</span>
            </Link>
          </li>
          <li className="dropdown-item" onClick={handleItemClick}>
            <span onClick={logout}>Log Out</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
