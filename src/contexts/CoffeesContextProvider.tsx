import React, { ReactNode } from "react";
import { CoffeesContext } from "./CoffeesContext";
import { setCoffeesAction } from "@/reducers/coffees/action";
import { coffeesReducer, CoffeesState } from "@/reducers/coffees/reducer";
import { Coffee } from "@/models/Coffee";
import { coffees as data } from "@/data/coffees";

interface CoffeesContextProviderProps {
  children: ReactNode;
}

const initialState: CoffeesState = {
  coffees: [],
  cart: {
    items: [
      {
        coffee: {
          id: "tradicional",
          name: "Espresso Tradicional",
          image: "/expresso.png",
          price: 999,
        },
        id: "cart-item-01",
        quantity: 1,
      },
      {
        coffee: {
          id: "americano",
          name: "Espresso Americano",
          image: "/americano.png",
          price: 999,
        },
        id: "cart-item-02",
        quantity: 1,
      },
    ],
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
