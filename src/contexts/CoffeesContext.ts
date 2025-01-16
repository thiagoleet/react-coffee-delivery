import React from "react";
import { Coffee } from "../models/Coffee";
import { Cart } from "../models/Cart";

interface CoffeesContextData {
  coffees: Coffee[];
  setCoffees: (coffees: Coffee[]) => void;
  getNumberOfItemsInCart: () => number;
  cart?: Cart;
}

export const CoffeesContext = React.createContext<CoffeesContextData>(
  {} as CoffeesContextData
);
