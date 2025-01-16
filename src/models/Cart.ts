import { Coffee } from "./Coffee";

export interface Cart {
  items: CartItem[];
}

export interface CartItem {
  id: string;
  quantity: number;
  coffee: Partial<Coffee>;
}
