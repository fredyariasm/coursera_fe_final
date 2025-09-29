import "./Styles/about.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h2 className="about-title">Little Lemon</h2>
        <h3 className="about-subtitle">Chicago</h3>
        <p className="about-desc">
          Little Lemon is a family-owned Mediterranean restaurant founded by
          brothers <strong>Adrian</strong> and <strong>Mario</strong>. Their
          vision is to bring the warmth of traditional Mediterranean flavors to
          Chicago, while adding a modern twist to classic recipes.
        </p>
        <p className="about-desc">
          From fresh Greek salads to handmade desserts, every dish is prepared
          with locally sourced ingredients, authentic techniques, and plenty of
          love. Adrian leads the kitchen with his passion for bold flavors,
          while Mario curates the dining experience to make every guest feel
          at home.
        </p>
      </div>

      <div className="about-photos">
        <img
          src="/MarioandAdrianb.jpg"
          alt="Adrian and Mario owners"
          className="about-photo photo-front"
        />
        <img
          src="/MarioandAdrianA.jpg"
          alt="Adrian and Mario owners"
          className="about-photo photo-back"
        />
      </div>
    </section>
  );
}
