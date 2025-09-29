import "./Styles/nav.css"

export default function LittleLemonNav() {
  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Reservations", href: "#reservations" },
    { label: "Order Online", href: "#order" },
    { label: "Login", href: "#login" },
  ];

  return (
    <header className="ll-header">
      <nav className="ll-nav">
        <a href="#" className="ll-brand" aria-label="Little Lemon home">
  <img src="/logo.svg" alt="Little Lemon logo" className="ll-logo" />
</a>

        <ul className="ll-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={`ll-link ${l.label === "Order Online" ? "ll-strong" : ""}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}