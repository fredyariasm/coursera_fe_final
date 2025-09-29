import "./Styles/testimonials.css";
import TestimonyCard from "./TestimonyCard";

const testimonials = [
  {
    name: "Elsa Munoz",
    rating: 5,
    avatar: "/avatars/elsa.jpg",
    text:
      "Incredible flavors and friendly service. The Greek salad and bruschetta are must-tries!"
  },
  {
    name: "Daniel Marley",
    rating: 4,
    avatar: "/avatars/daniel.jpg",
    text:
      "Cozy vibe with authentic Mediterranean dishes. I’ll be back for the lemon dessert."
  },
  {
    name: "Cesar Talero",
    rating: 5,
    avatar: "/avatars/cesar.jpg",
    text:
      "Everything was fresh and perfectly seasoned. Super fast pickup, too."
  },
  {
    name: "Mary Saenz",
    rating: 4,
    avatar: "/avatars/mary.jpg",
    text:
      "Great variety and fair prices. The staff made our night special."
  }
];

export default function Testimonials() {
  return (
    <section className="tm">
      <h2 className="tm-title">Testimonials</h2>

      <div className="tm-grid">
        {testimonials.map((t) => (
          <TestimonyCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
