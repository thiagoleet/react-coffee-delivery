/* eslint-disable @typescript-eslint/no-explicit-any */
import { addCoffeeToCart, Cart, removeCoffeeFromCart } from "@/models/Cart";
import { Coffee } from "@/models/Coffee";
import { ActionTypes } from "./action";

export interface CoffeesState {
  coffees: Coffee[];
  cart: Cart;
}

export function coffeesReducer(state: CoffeesState, action: any): CoffeesState {
  switch (action.type) {
    case ActionTypes.SET_COFFEES:
      return { ...state, coffees: action.payload.coffees };
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const cart = addCoffeeToCart(
        state.cart,
        action.payload.coffee,
        action.payload.quantity
      );

      return { ...state, cart };
    }
    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
      const cart = removeCoffeeFromCart(state.cart, action.payload.coffee);

      return { ...state, cart };
    }

    default:
      return state;
  }
}
