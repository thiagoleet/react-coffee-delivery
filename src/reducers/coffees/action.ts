import { City } from "@/models/City";
import { Coffee } from "@/models/Coffee";

export enum ActionTypes {
  SET_COFFEES = "SET_COFFEES",
  SET_CITIES = "SET_CITIES",
  ADD_COFFEE_TO_CART = "ADD_COFFEE_TO_CART",
  REMOVE_COFFEE_FROM_CART = "REMOVE_COFFEE_FROM_CART",
  SELECT_CITY = "SELECT_CITY",
}

export interface CoffeesStateAction {
  type: string;
  payload: {
    coffees?: Coffee[];
    coffee?: Partial<Coffee>;
    quantity?: number;
    cities?: City[];
    city?: City;
  };
}

export function setCoffeesAction(coffees: Coffee[]): CoffeesStateAction {
  return {
    type: ActionTypes.SET_COFFEES,
    payload: { coffees },
  };
}

export function setCitiesAction(cities: City[]): CoffeesStateAction {
  return {
    type: ActionTypes.SET_CITIES,
    payload: { cities },
  };
}

export function addCoffeeToCartAction(
  coffee: Partial<Coffee>,
  quantity: number
): CoffeesStateAction {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: { coffee, quantity },
  };
}

export function removeCoffeeFromCartAction(
  coffee: Partial<Coffee>
): CoffeesStateAction {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: { coffee },
  };
}

export function selectCityAction(city: City): CoffeesStateAction {
  return {
    type: ActionTypes.SELECT_CITY,
    payload: {
      city,
    },
  };
}
