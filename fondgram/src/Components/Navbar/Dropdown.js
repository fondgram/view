import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';

const Dropdown = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here, such as clearing user data from local storage
    setCurrentUser(null);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {currentUser ? currentUser.fullName : ''}
        <span className="caret"></span>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={handleLogout}>
            Log out
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
