import "./Styles/nav.css"
import { Link, useLocation } from "react-router-dom";

export default function LittleLemonNav() {
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/#about" },
    { label: "Menu", to: "/#menu" },
    { label: "Reservations", to: "/booking" },
    { label: "Order Online", to: "/#order" },
    { label: "Login", to: "/#login" },
  ];

  const location = useLocation();

  return (
    <header className="ll-header">
      <nav className="ll-nav">
        <Link to="/" className="ll-brand" aria-label="Little Lemon home">
          <img src="/logo.svg" alt="Little Lemon logo" className="ll-logo" />
        </Link>

        <ul className="ll-links">
          {links.map((l) => {
            const isActive = location.pathname === l.to; // exact match
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

      </nav>
    </header>
  );
}