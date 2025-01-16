/* eslint-disable @typescript-eslint/no-explicit-any */
import { addCoffeeToCart, Cart } from "@/models/Cart";
import { Coffee } from "@/models/Coffee";
import { ActionTypes } from "./action";

export interface CoffeesState {
  coffees: Coffee[];
  cart: Cart;
}

export function coffeesReducer(state: CoffeesState, action: any): CoffeesState {
  switch (action.type) {
    case ActionTypes.SET_COFFEES:
      console.log("action.payload", action);
      return { ...state, coffees: action.payload.coffees };
    case ActionTypes.ADD_COFFEE_TO_CART: {
      console.log("action.payload", action);
      const cart = addCoffeeToCart(
        state.cart,
        action.payload.coffee,
        action.payload.quantity
      );

      return { ...state, cart };
    }
    default:
      return state;
  }
}
