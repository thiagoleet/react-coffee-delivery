import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import { CartButton, CartButtonBadge } from "./styles";

export function HeaderCart() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/cart");
  }

  return (
    <CartButton onClick={handleClick}>
      <CartButtonBadge>3</CartButtonBadge>
      <ShoppingCart />
    </CartButton>
  );
}
