export const SEED_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export function updateTimes(state, action) {
  switch (action.type) {
    case "dateChanged":
      return state;
    default:
      return state;
  }
}

export function initializeTimes() {
  return [...SEED_TIMES];
}
