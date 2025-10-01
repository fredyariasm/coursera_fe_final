import { fetchAPI} from "./api";


export const SEED_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export function updateTimes(state, action) {
  switch (action.type) {
    case "dateChanged":
      const newDate = new Date(action.date);
      return fetchAPI(newDate);
    default:
      return state;
  }
}

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}
