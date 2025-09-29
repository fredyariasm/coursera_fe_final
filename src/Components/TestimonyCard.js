import "./Styles/testimonycard.css";

export default function TestimonyCard({ name, rating = 5, avatar, text }) {
  return (
    <article className="tcard">
      <div className="tcard-row tcard-top">
        <div className="tcard-rating" aria-label={`Rating: ${rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} filled={i < rating} />
          ))}
        </div>
      </div>

      <div className="tcard-row tcard-user">
        <img
          className="tcard-avatar"
          src={avatar || "/avatars/placeholder.png"}
          alt={name}
        />
        <div className="tcard-name">{name}</div>
      </div>

      <p className="tcard-text">{text}</p>
    </article>
  );
}

function Star({ filled }) {
  return (
    <svg
      className={`tcard-star ${filled ? "is-filled" : ""}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 3.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18.8l-5.8 3.1 1.1-6.5L2.6 10.3l6.5-.9L12 3.5z" />
    </svg>
  );
}
