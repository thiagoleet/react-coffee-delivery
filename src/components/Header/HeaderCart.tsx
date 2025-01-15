import { ShoppingCart } from "@phosphor-icons/react";
import { CartButton } from "./styles";

export function HeaderCart() {
  return (
    <CartButton type="button">
      <ShoppingCart />
    </CartButton>
  );
}
