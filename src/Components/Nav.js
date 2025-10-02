import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Styles/nav.css";

export default function LittleLemonNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/#about" },
    { label: "Menu", to: "/#menu" },
    { label: "Reservations", to: "/booking" },
    { label: "Order Online", to: "/#order" },
    { label: "Login", to: "/#login" },
  ];
  
  const handleNavClick = () => setOpen(false);

  return (
    <header className="ll-header">
      <nav className="ll-nav">
        <Link to="/" className="ll-brand" aria-label="Little Lemon home" onClick={handleNavClick}>
          <img src="/logo.svg" alt="Little Lemon logo" className="ll-logo" />
        </Link>

        {/* Desktop links */}
        <ul className="ll-links">
          {links.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className={`ll-link ${isActive ? "ll-strong" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className={`ll-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="ll-mobile"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="ll-bar" />
          <span className="ll-bar" />
          <span className="ll-bar" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div id="ll-mobile" className={`ll-mobile ${open ? "show" : ""}`}>
        <ul>
          {links.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className={`ll-m-link ${isActive ? "ll-strong" : ""}`}
                  onClick={handleNavClick}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
