import { Coffee } from "./Coffee";

export interface Cart {
  items: CartItem[];
}

export interface CartItem {
  id: string;
  quantity: number;
  coffee: Partial<Coffee>;
}

export interface CheckoutCart {
  cart: Cart;
  zipCode: string;
  address: string;
  addressNumber: string;
  addressComplement?: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
}

export function addCoffeeToCart(
  cart: Cart,
  coffee: Partial<Coffee>,
  quantity: number
): Cart {
  const item = cart.items.find((item) => item.id === coffee.id);
  quantity = quantity || 1;

  if (item) {
    item.quantity = quantity;
  } else {
    cart.items.push({
      id: coffee.id || "",
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

export function removeCoffeeFromCart(
  cart: Cart,
  coffee: Partial<Coffee>
): Cart {
  const toBeRemoved = cart.items.find((item) => item.id === coffee.id);

  if (toBeRemoved) {
    cart.items = cart.items.filter((item) => item.id !== coffee.id);
  }

  return cart;
}
