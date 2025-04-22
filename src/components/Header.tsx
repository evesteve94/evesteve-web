// Header.tsx
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "/", label: "start" },
    { to: "/priser", label: "priser" },
    { to: "/om-oss", label: "om oss" },
    { to: "/kontakt", label: "kontakt" },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img
              className="header-logo"
              src="logo.png"
              alt="evesteve web logo"
            />
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-links active" : "nav-links"
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
