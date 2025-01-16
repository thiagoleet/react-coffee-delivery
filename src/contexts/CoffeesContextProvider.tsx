import React, { ReactNode } from "react";
import { CoffeesContext } from "./CoffeesContext";
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
  selectCityAction,
  setCitiesAction,
  setCoffeesAction,
} from "@/reducers/coffees/action";
import { coffeesReducer, CoffeesState } from "@/reducers/coffees/reducer";
import { Coffee } from "@/models/Coffee";
import coffeesData from "@/data/coffees";
import citiesData from "@/data/cities";
import { City } from "@/models/City";

interface CoffeesContextProviderProps {
  children: ReactNode;
}

const initialState: CoffeesState = {
  coffees: [],
  cities: [],
  cart: {
    items: [],
  },
};

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = React.useReducer(
    coffeesReducer,
    initialState,
    (initialState) => {
      return initialState;
    }
  );

  function setCoffees(coffees: Coffee[]) {
    dispatch(setCoffeesAction(coffees));
  }

  function setCities(cities: City[]) {
    dispatch(setCitiesAction(cities));
  }

  function getNumberOfItemsInCart() {
    if (!coffeesState.cart) {
      return 0;
    }

    return coffeesState.cart.items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  }

  function addToCart(coffee: Partial<Coffee>, quantity: number) {
    dispatch(addCoffeeToCartAction(coffee, quantity));
  }

  function removeFromCart(coffee: Partial<Coffee>) {
    dispatch(removeCoffeeFromCartAction(coffee));
  }

  function handleSelectCity(city: City) {
    dispatch(selectCityAction(city));
  }

  const { coffees, cart, cities, city } = coffeesState;

  React.useEffect(() => {
    setCoffees(coffeesData);
    setCities(citiesData);
  }, []);

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        cart,
        cities,
        city,
        setCoffees,
        setCities,
        getNumberOfItemsInCart,
        addCoffeeToCart: addToCart,
        removeFromCart,
        selectCity: handleSelectCity,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
