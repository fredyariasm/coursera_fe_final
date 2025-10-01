import BookingForm from "./Components/BookingForm";
import Nav from './Components/Nav'
import "./Components/Styles/bookingpage.css";
import { useReducer } from "react";

const SEED_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function updateTimes(state, action) {
  switch (action.type) {
    case "dateChanged":
      return SEED_TIMES;
    default:
      return state;
  }
}

function initializeTimes() {
  return SEED_TIMES;
}

function BookingPage() {

  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

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
          <BookingForm availableTimes={availableTimes}
            dispatchAvailableTimes={dispatch} />
        </section>
      </main>
    </>
  );
}

export default BookingPage;