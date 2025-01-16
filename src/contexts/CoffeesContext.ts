import React from "react";
import { Coffee } from "@/models/Coffee";
import { Cart } from "@/models/Cart";

interface CoffeesContextData {
  coffees: Coffee[];
  cart: Cart;
  setCoffees: (coffees: Coffee[]) => void;
  getNumberOfItemsInCart: () => number;
  addCoffeeToCart: (coffee: Partial<Coffee>, quantity: number) => void;
  removeFromCart: (coffee: Partial<Coffee>) => void;
}

export const CoffeesContext = React.createContext<CoffeesContextData>(
  {} as CoffeesContextData
);
