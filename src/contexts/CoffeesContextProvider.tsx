import React, { ReactNode } from "react";
import { CoffeesContext } from "./CoffeesContext";
import {
  addCoffeeToCartAction,
  setCoffeesAction,
} from "@/reducers/coffees/action";
import { coffeesReducer, CoffeesState } from "@/reducers/coffees/reducer";
import { Coffee } from "@/models/Coffee";
import { coffees as data } from "@/data/coffees";

interface CoffeesContextProviderProps {
  children: ReactNode;
}

const initialState: CoffeesState = {
  coffees: [],
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

  function getNumberOfItemsInCart() {
    if (!coffeesState.cart) {
      return 0;
    }

    return coffeesState.cart.items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  }

  function addToCart(coffee: Coffee, quantity: number) {
    console.log("addToCart", coffee, quantity);
    dispatch(addCoffeeToCartAction(coffee, quantity));
  }

  const { coffees, cart } = coffeesState;

  React.useEffect(() => {
    setCoffees(data);
  }, []);

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        cart,
        setCoffees,
        getNumberOfItemsInCart,
        addCoffeeToCart: addToCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
