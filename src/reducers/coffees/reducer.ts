/* eslint-disable @typescript-eslint/no-explicit-any */
import { Coffee } from "../../models/Coffee";
import { ActionTypes } from "./action";

export interface CoffeesState {
  coffees: Coffee[];
}

export function coffeesReducer(state: CoffeesState, action: any): CoffeesState {
  switch (action.type) {
    case ActionTypes.SET_COFFEES:
      return { ...state, coffees: action.payload };
    default:
      return state;
  }
}
