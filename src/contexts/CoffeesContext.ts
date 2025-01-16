import React from "react";
import { Coffee } from "@/models/Coffee";
import { Cart } from "@/models/Cart";

interface CoffeesContextData {
  coffees: Coffee[];
  cart: Cart;
  setCoffees: (coffees: Coffee[]) => void;
  getNumberOfItemsInCart: () => number;
  addCoffeeToCart: (coffee: Coffee, quantity: number) => void;
}

export const CoffeesContext = React.createContext<CoffeesContextData>(
  {} as CoffeesContextData
);
