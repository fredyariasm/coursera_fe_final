import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders booking form labels", () => {
  render(<BookingForm availableTimes={["17:00"]} />);
  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
});