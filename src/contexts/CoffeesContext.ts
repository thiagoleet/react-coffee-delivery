import React from "react";
import { Coffee } from "@/models/Coffee";
import { Cart, CheckoutCart } from "@/models/Cart";
import { City } from "@/models/City";

interface CoffeesContextData {
  coffees: Coffee[];
  cities: City[];
  cart: Cart;
  checkout?: CheckoutCart | undefined;
  city?: City | undefined;
  setCoffees: (coffees: Coffee[]) => void;
  setCities: (cities: City[]) => void;
  getNumberOfItemsInCart: () => number;
  getSubtotal: () => number;
  getTotal: () => number;
  addCoffeeToCart: (coffee: Partial<Coffee>, quantity: number) => void;
  removeFromCart: (coffee: Partial<Coffee>) => void;
  selectCity: (city: City) => void;
  createCheckout: (cart: CheckoutCart) => void;
}

export const CoffeesContext = React.createContext<CoffeesContextData>(
  {} as CoffeesContextData
);
