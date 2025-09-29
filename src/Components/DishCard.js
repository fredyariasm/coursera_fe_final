import "./Styles/dishcard.css";

export default function DishCard({ title, price, img, desc }) {
  return (
    <article className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-body">
        <div className="card-row">
          <h3 className="card-title">{title}</h3>
          <span className="card-price">{price}</span>
        </div>
        <p className="card-desc">{desc}</p>
        <a className="card-link" href="#order">
          Order a delivery
          <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M3 6h10l3 4h5v6h-2a3 3 0 1 1-6 0H9a3 3 0 1 1-6 0H1v-2h2V6zm4 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
