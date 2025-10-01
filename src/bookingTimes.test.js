import { initializeTimes, updateTimes, SEED_TIMES } from "./bookingTimes";

describe("bookingTimes helpers", () => {
  test("initializeTimes returns the seed list", () => {
    const initial = initializeTimes();
    expect(initial).toEqual(SEED_TIMES);
    //ensure it returns a new array, not a shared reference
    expect(initial).not.toBe(SEED_TIMES);
  });

  test("updateTimes returns the same state for dateChanged (no change yet)", () => {
    const state = ["17:00", "18:00"];
    const next = updateTimes(state, { type: "dateChanged", date: "2025-12-25" });
    
    expect(next).toBe(state);            // identity check
    expect(next).toEqual(["17:00", "18:00"]); // value check
    
  });

  test("updateTimes returns same state for unknown action", () => {
    const state = ["19:00", "20:00"];
    const next = updateTimes(state, { type: "UNKNOWN" });
    expect(next).toBe(state);
  });
});
