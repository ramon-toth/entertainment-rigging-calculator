import { units } from "../utils/units";

export function unitsReducer(state, action) {
  switch (action.type) {
    case "imperial":
      return { ...units.imperial };
    case "metric":
      return { ...units.metric };
    default:
      return state;
  }
}
