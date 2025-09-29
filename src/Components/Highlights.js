import "./Styles/highlights.css";
import DishCard from "./DishCard";

const dishes = [
  {
    title: "Greek salad",
    price: "$12.99",
    img: "/greek-salad.jpg",
    desc:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    img: "/bruschetta.jpg",
    desc:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    img: "/lemon-dessert.jpg",
    desc:
      "This comes straight from grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined."
  }
];

export default function Highlights() {
  return (
    <section className="hl">
      <div className="hl-head">
        <h2 className="hl-title">This weeks specials!</h2>
        <a className="hl-btn" href="#menu">Online Menu</a>
      </div>

      <div className="hl-grid">
        {dishes.map((d) => (
          <DishCard key={d.title} {...d} />
        ))}
      </div>
    </section>
  );
}
