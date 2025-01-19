import { addCoffeeToCart, Cart, removeCoffeeFromCart } from "@/models/Cart";
import { Coffee } from "@/models/Coffee";
import { ActionTypes, CoffeesStateAction } from "./action";
import { City } from "@/models/City";

export interface CoffeesState {
  coffees: Coffee[];
  cities: City[];
  cart: Cart;
  city?: City | undefined;
}

export function coffeesReducer(
  state: CoffeesState,
  action: CoffeesStateAction
): CoffeesState {
  switch (action.type) {
    case ActionTypes.SET_COFFEES:
      return { ...state, coffees: action.payload.coffees! };

    case ActionTypes.SET_CITIES:
      return { ...state, cities: action.payload.cities! };

    case ActionTypes.ADD_COFFEE_TO_CART: {
      const cart = addCoffeeToCart(
        state.cart,
        action.payload.coffee!,
        action.payload.quantity!
      );

      return { ...state, cart };
    }
    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
      const cart = removeCoffeeFromCart(state.cart, action.payload.coffee!);

      return { ...state, cart };
    }

    case ActionTypes.SELECT_CITY: {
      return { ...state, city: action.payload.city };
    }

    default:
      return state;
  }
}
