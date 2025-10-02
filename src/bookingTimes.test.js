import { initializeTimes, updateTimes } from "./bookingTimes";
import { fetchAPI } from "./api";

jest.mock("./api", () => ({
  fetchAPI: jest.fn(),
}));

describe("bookingTimes helpers (module API)", () => {
  beforeEach(() => {
    fetchAPI.mockReset();
  });

  test("initializeTimes returns times for today via fetchAPI", () => {
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);

    const initial = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    const [arg] = fetchAPI.mock.calls[0];
    expect(arg).toBeInstanceOf(Date);
    expect(initial).toEqual(["17:00", "18:00", "19:00"]);
  });

  test("updateTimes returns API times for the selected date", () => {
    fetchAPI.mockReturnValue(["18:00", "20:00"]);
    const prev = ["17:00"];

    const next = updateTimes(prev, { type: "dateChanged", date: "2025-12-25" });

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    const [arg] = fetchAPI.mock.calls[0];
    expect(arg).toBeInstanceOf(Date);
    expect(arg.toISOString().startsWith("2025-12-25")).toBe(true);
    expect(next).toEqual(["18:00", "20:00"]);
  });

  test("updateTimes returns same state for unknown action (no API call)", () => {
    const state = ["19:00", "20:00"];
    const next = updateTimes(state, { type: "UNKNOWN" });
    expect(fetchAPI).not.toHaveBeenCalled();
    expect(next).toBe(state);
  });
});
