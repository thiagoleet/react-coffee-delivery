import { Coffee } from "../../models/Coffee";

export enum ActionTypes {
  SET_COFFEES = "SET_COFFEES",
}

export function setCoffeesAction(coffees: Coffee[]) {
  return {
    type: ActionTypes.SET_COFFEES,
    payload: { coffees },
  };
}
