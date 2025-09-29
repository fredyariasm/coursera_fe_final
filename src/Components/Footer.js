import "./Styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft__inner">
        {/* Brand */}
        <div className="ft__brand">
          <a className="ft__logo" href="/" aria-label="Little Lemon home">
            <img src="/logo.svg" alt="" />
            <span className="sr-only">Little Lemon</span>
          </a>
          <p className="ft__tagline">
            Family-owned Mediterranean restaurant in Chicago serving classic
            recipes with a modern twist.
          </p>
        </div>

        {/* Doormat navigation */}
        <nav className="ft__col" aria-label="Doormat navigation">
          <h3 className="ft__title">Navigation</h3>
          <ul className="ft__list">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="ft__col" aria-label="Contact information">
          <h3 className="ft__title">Contact</h3>
          <address className="ft__addr">
            1234 Fredy Ave<br />
            Chicago, IL 90909
          </address>
          <ul className="ft__list">
            <li><a href="tel:+19999999">(999) 999-9999</a></li>
            <li><a href="mailto:info@littlelemon.example">info@littlelemon.com</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="ft__col" aria-label="Social media">
          <h3 className="ft__title">Social</h3>
          <ul className="ft__list ft__social">
            <li><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://tiktok.com/" target="_blank" rel="noreferrer">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="ft__bottom">
        <p>© {year} Little Lemon. All rights reserved.</p>
        <ul className="ft__legal">
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#terms">Terms</a></li>
          <li><a href="#accessibility">Accessibility</a></li>
        </ul>
      </div>
    </footer>
  );
}
