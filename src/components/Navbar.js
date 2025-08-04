import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Settings from "../pages/Settings"; // import your Settings component

export default function Navbar() {
  const [showSettingsSidebar, setShowSettingsSidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
  ];

  // Close the settings sidebar
  function closeSettingsSidebar() {
    setShowSettingsSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>diesHub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Settings Icon Button */}
        <button
          className="settings-icon-btn"
          aria-label="Open settings"
          onClick={() => setShowSettingsSidebar(true)}
        >
          <FontAwesomeIcon icon={faCog} size="lg" />
        </button>
      </div>

      {/* Sidebar for Settings */}
      {showSettingsSidebar && (
        <div className="sidebar-overlay" onClick={closeSettingsSidebar}>
          <div
            className="sidebar settings-sidebar"
            onClick={(e) => e.stopPropagation()} // prevent close on click inside sidebar
          >
            <button className="close-btn" onClick={closeSettingsSidebar}>
              ×
            </button>
            <Settings />
          </div>
        </div>
      )}
    </>
  );
}
