import { Coffee } from "@/models/Coffee";

export enum ActionTypes {
  SET_COFFEES = "SET_COFFEES",
  ADD_COFFEE_TO_CART = "ADD_COFFEE_TO_CART",
  REMOVE_COFFEE_FROM_CART = "REMOVE_COFFEE_FROM_CART",
}

export function setCoffeesAction(coffees: Coffee[]) {
  return {
    type: ActionTypes.SET_COFFEES,
    payload: { coffees },
  };
}

export function addCoffeeToCartAction(
  coffee: Partial<Coffee>,
  quantity: number
) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: { coffee, quantity },
  };
}

export function removeCoffeeFromCartAction(coffee: Partial<Coffee>) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: { coffee },
  };
}
