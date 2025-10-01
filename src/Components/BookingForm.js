import { useEffect, useMemo, useState } from "react";
import "./Styles/bookingform.css";

const availableTimes  = ["17:00","18:00","19:00","20:00","21:00","22:00"];

export default function BookingForm({ onSubmit }) {
  const todayISO = useMemo(() => new Date().toISOString().split("T")[0], []);
  const [date, setDate] = useState(todayISO);
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!date) e.date = "Please choose a date.";
    if (!time) e.time = "Please choose a time.";
    if (Number(guests) < 1 || Number(guests) > 10) e.guests = "Guests must be between 1 and 10.";
    if (!occasion) e.occasion = "Please choose an occasion.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;

    const payload = { date, time, guests: Number(guests), occasion };
    if (onSubmit) onSubmit(payload);
    alert(`Reservation requested:\n\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion}`);
  }

  return (
    <form className="bk-form" onSubmit={handleSubmit} noValidate>
      <div className="bk-field">
        <label htmlFor="res-date" className="bk-label">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={date}
          min={todayISO}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "err-date" : undefined}
          className="bk-input"
        />
        {errors.date && <span id="err-date" className="bk-error">{errors.date}</span>}
      </div>
      <div className="bk-field">
        <label htmlFor="res-time" className="bk-label">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? "err-time" : undefined}
          className="bk-select"
        >
          {DEFAULT_TIMES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.time && <span id="err-time" className="bk-error">{errors.time}</span>}
      </div>

      <div className="bk-field">
        <label htmlFor="guests" className="bk-label">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min={1}
          max={10}
          placeholder="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? "err-guests" : undefined}
          className="bk-input"
        />
        {errors.guests && <span id="err-guests" className="bk-error">{errors.guests}</span>}
      </div>

      <div className="bk-field">
        <label htmlFor="occasion" className="bk-label">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-invalid={!!errors.occasion}
          aria-describedby={errors.occasion ? "err-occasion" : undefined}
          className="bk-select"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Business</option>
          <option>Other</option>
        </select>
        {errors.occasion && <span id="err-occasion" className="bk-error">{errors.occasion}</span>}
      </div>

      <div className="bk-actions">
        <input type="submit" value="Make Your Reservation" className="bk-submit" />
      </div>
    </form>
  );
}
