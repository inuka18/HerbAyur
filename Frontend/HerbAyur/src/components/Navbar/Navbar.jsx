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
import { useState } from "react";

function Navbar() {

  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <>
      <header className="pro-navbar">

        {/* LOGO */}
        <div className="pro-nav-left">
          <img src="/images/herbayur.jpeg" alt="logo" className="pro-logo" />
        </div>

        {/* NAV LINKS */}
        <nav className="pro-nav-links">

          <NavLink
            to="/"
            end
            onMouseEnter={() => setHoverIndex(0)}
            className={({ isActive }) =>
              isActive ? "pro-nav-item active" : "pro-nav-item"
            }
          >
            <Home size={16}/> Home
          </NavLink>

          <NavLink
            to="/About"
            onMouseEnter={() => setHoverIndex(1)}
            className={({ isActive }) =>
              isActive ? "pro-nav-item active" : "pro-nav-item"
            }
          >
            <Info size={16}/> About
          </NavLink>

          <NavLink
            to="/Contact"
            onMouseEnter={() => setHoverIndex(2)}
            className={({ isActive }) =>
              isActive ? "pro-nav-item active" : "pro-nav-item"
            }
          >
            <Phone size={16}/> Contact
          </NavLink>

          {/* 🌿 MOVING ICON CLUSTER */}
          <div
            className="pro-floating-cluster"
            style={{
              transform: `translateX(${hoverIndex * 120}px)`
            }}
          >
            <span className="pro-cluster pro-corn">🌾</span>
            <span className="pro-cluster pro-leaf">🌿</span>
            <span className="pro-cluster pro-ginger">🫚</span>
            <span className="pro-cluster pro-flower">🌸</span>
          </div>

        </nav>

        {/* BUTTONS */}
        <div className="pro-nav-right">

          <NavLink to="/Login" className="pro-btn pro-btn-outline">
            <LogIn size={16}/> Login
          </NavLink>

          <NavLink to="/Signup" className="pro-btn pro-btn-primary">
            <UserPlus size={16}/> Sign Up
          </NavLink>

          <NavLink to="/RequestForm" className="pro-btn pro-btn-accent">
            <Send size={16}/> Post Requirement
          </NavLink>

        </div>

      </header>

      {/* 🌿 NAVBAR SHAPE */}
      <div className="pro-navbar-shape">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,40 C200,100 400,0 720,50 C1000,90 1200,20 1440,60 L1440,0 L0,0 Z"
            className="pro-wave-path"
          />
        </svg>
      </div>
    </>
  );
}

export default Navbar;