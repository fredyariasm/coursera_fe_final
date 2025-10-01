import BookingForm from "./Components/BookingForm";
import Nav from  './Components/Nav'
import "./Components/Styles/bookingpage.css";

export default function BookingPage() {
  return (
    <>
      <Nav />
      <main className="booking-shell">
        <section className="booking-hero">
          <h1 className="booking-title">Reserve a Table</h1>
          <p className="booking-sub">
            Pick a date, time and tell us the occasion—we’ll save you a spot.
          </p>
        </section>

        <section className="booking-form-wrap">
          <BookingForm />
        </section>
      </main>
    </>
  );
}