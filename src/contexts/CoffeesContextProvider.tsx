import React, { ReactNode } from "react";
import { CoffeesContext } from "./CoffeesContext";
import { setCoffeesAction } from "../reducers/coffees/action";
import { coffeesReducer } from "../reducers/coffees/reducer";
import { Coffee } from "../models/Coffee";
import { coffees as data } from "../data/coffees";

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = React.useReducer(
    coffeesReducer,
    { coffees: [], cart: { items: [] } },
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
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
