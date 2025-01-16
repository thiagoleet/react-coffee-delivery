import { Coffee } from "@/models/Coffee";

export enum ActionTypes {
  SET_COFFEES = "SET_COFFEES",
  ADD_COFFEE_TO_CART = "ADD_COFFEE_TO_CART",
  UPDATE_COFFEE_QUANTITY = "UPDATE_COFFEE_QUANTITY",
  REMOVE_COFFEE_FROM_CART = "REMOVE_COFFEE_FROM_CART",
}

export function setCoffeesAction(coffees: Coffee[]) {
  return {
    type: ActionTypes.SET_COFFEES,
    payload: { coffees },
  };
}

export function addCoffeeToCartAction(coffee: Coffee, quantity: number) {
  console.log("addCoffeeToCartAction", coffee, quantity);
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: { coffee, quantity },
  };
}

export function updateCoffeeQuantityAction(coffee: Coffee, quantity: number) {
  return {
    type: ActionTypes.UPDATE_COFFEE_QUANTITY,
    payload: { coffee, quantity },
  };
}

export function removeCoffeeFromCartAction(coffee: Coffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: { coffee },
  };
}
