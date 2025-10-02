import { Link, useLocation } from "react-router-dom";
import "./Styles/confirmedbooking.css";
import Nav from './Nav'

export default function ConfirmedBooking() {
  const { state } = useLocation();
  const res = state?.reservation || {};

  const ref = res.ref || makeRef(res);

  return (
    <>
    <Nav />
    <main className="confirm-shell">
      
      
      <section className="confirm-hero">
        <SuccessIcon />
        <h1 className="confirm-title">Booking confirmed</h1>
        <p className="confirm-sub">
          Thanks! Your table is reserved. We’ve sent a confirmation to your email.
        </p>
      </section>

      <section className="confirm-card">
        <h2 className="confirm-heading">Reservation details</h2>
        <dl className="confirm-list">
          <div className="confirm-row">
            <dt>Date</dt>
            <dd>{formatDate(res.date)}</dd>
          </div>
          <div className="confirm-row">
            <dt>Time</dt>
            <dd>{res.time || "—"}</dd>
          </div>
          <div className="confirm-row">
            <dt>Guests</dt>
            <dd>{res.guests ?? "—"}</dd>
          </div>
          <div className="confirm-row">
            <dt>Occasion</dt>
            <dd>{res.occasion || "—"}</dd>
          </div>
          <div className="confirm-row">
            <dt>Reference</dt>
            <dd className="confirm-ref">{ref}</dd>
          </div>
        </dl>

        <div className="confirm-actions">
          <Link className="confirm-btn" to="/">Back to Home</Link>
          <Link className="confirm-btn outline" to="/#menu">See the Menu</Link>
        </div>
      </section>
    </main>
    </>
    
  );
}

function formatDate(iso) {
  if (!iso) return "—";
  const d = iso.length <= 10 ? new Date(iso + "T00:00:00") : new Date(iso);
  return d.toLocaleDateString(undefined, { weekday: "short", year: "numeric", month: "short", day: "numeric" });
}

function makeRef({ date, time }) {  
  const d = (date || "").replaceAll("-", "");
  const t = (time || "").replace(":", "");
  return `LLM-${d || "xxxxxx"}-${t || "xxxx"}`;
}

function SuccessIcon() {
  return (
    <svg className="confirm-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#2ecc71" opacity=".15" />
      <path
        d="M20 7.5L10.5 17 6 12.5"
        fill="none"
        stroke="#2ecc71"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
