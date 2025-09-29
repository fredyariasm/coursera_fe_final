import "./Styles/hero.css"

export default function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-strip">
        <div className="hero-text">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-city">Chicago</h2>
          <p className="hero-copy">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="#reservations" className="hero-cta">Reserve a Table</a>
        </div>
      </div>
      
      <img
        className="hero-photo"
        src="/restaurantfood.jpg"
        alt="Mediterranean food on a slate board"
      />
    </section>
  );
}