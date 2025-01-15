import React from "react";
import { Coffee } from "../models/Coffee";

interface CoffeesContextData {
  coffees: Coffee[];
  setCoffees: (coffees: Coffee[]) => void;
}

export const CoffeesContext = React.createContext<CoffeesContextData>(
  {} as CoffeesContextData
);
