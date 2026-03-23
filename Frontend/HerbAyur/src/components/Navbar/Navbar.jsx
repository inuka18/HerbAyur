import "./Navbar.css";
import {
  LogIn,
  UserPlus,
  Send,
  Home,
  Info,
  Phone,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="custom-navbar">

      {/* LOGO */}
      <div className="custom-nav-left">
        <img src="/images/herbayur.jpeg" alt="logo" className="custom-logo" />
      </div>

      {/* NAV LINKS */}
      <nav className="custom-nav-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "custom-nav-item active" : "custom-nav-item"
          }
        >
          <Home size={16}/> Home
        </NavLink>

        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? "custom-nav-item active" : "custom-nav-item"
          }
        >
          <Info size={16}/> About
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "custom-nav-item active" : "custom-nav-item"
          }
        >
          <Phone size={16}/> Contact
        </NavLink>

      </nav>

      {/* BUTTONS */}
      <div className="custom-nav-right">

        <NavLink to="/Login" className="custom-btn custom-btn-outline">
          <LogIn size={16}/> Login
        </NavLink>

        <NavLink to="/Signup" className="custom-btn custom-btn-primary">
          <UserPlus size={16}/> Sign Up
        </NavLink>

        <NavLink to="/RequestForm" className="custom-btn custom-btn-accent">
          <Send size={16}/> Post Requirement
        </NavLink>

      </div>

    </header>
  );
}

export default Navbar;