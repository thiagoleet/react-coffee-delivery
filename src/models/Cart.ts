import { Coffee } from "./Coffee";

export interface Cart {
  items: CartItem[];
}

export interface CartItem {
  id: string;
  quantity: number;
  coffee: Partial<Coffee>;
}

export function addCoffeeToCart(
  cart: Cart,
  coffee: Coffee,
  quantity: number
): Cart {
  const item = cart.items.find((item) => item.id === coffee.id);
  quantity = quantity || 1;

  if (item) {
    item.quantity = quantity;
  } else {
    cart.items.push({
      id: coffee.id,
      quantity: quantity,
      coffee: {
        id: coffee.id,
        name: coffee.name,
        price: coffee.price,
        image: coffee.image,
      },
    });
  }

  return { ...cart };
}
