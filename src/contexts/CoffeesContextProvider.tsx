import React, { ReactNode } from "react";
import { CoffeesContext } from "./CoffeesContext";
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
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

  function addToCart(coffee: Partial<Coffee>, quantity: number) {
    dispatch(addCoffeeToCartAction(coffee, quantity));
  }

  function removeFromCart(coffee: Partial<Coffee>) {
    dispatch(removeCoffeeFromCartAction(coffee));
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
        removeFromCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
