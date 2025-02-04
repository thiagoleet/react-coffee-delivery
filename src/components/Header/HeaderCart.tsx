import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import { CartButton, CartButtonBadge } from "./styles";
import { CoffeesContext } from "@/contexts/CoffeesContext";

export function HeaderCart() {
  const navigate = useNavigate();
  const { getNumberOfItemsInCart } = React.useContext(CoffeesContext);

  function handleClick() {
    navigate("/cart");
  }

  const numberOfItemsInCart = getNumberOfItemsInCart();

  return (
    <CartButton onClick={handleClick}>
      {numberOfItemsInCart > 0 && (
        <CartButtonBadge className="badge">
          {numberOfItemsInCart}
        </CartButtonBadge>
      )}
      <ShoppingCart />
    </CartButton>
  );
}
