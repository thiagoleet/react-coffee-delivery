import React from "react";
import { CartContentItem } from "./CartContentItem";
import { CartContentContainer, CartContentItemsWrapper } from "./styles";
import { CoffeesContext } from "@/contexts/CoffeesContext";

export function CartContent() {
  const { cart } = React.useContext(CoffeesContext);

  return (
    <CartContentContainer>
      <CartContentItemsWrapper>
        {cart?.items &&
          cart.items.map((item) => (
            <CartContentItem
              key={item.id}
              item={item}
            />
          ))}
      </CartContentItemsWrapper>
      <footer>
        <div>
          <div>Total de itens</div>
          <div>Entrega</div>
          <div>Total</div>
        </div>
        <button disabled={cart?.items.length === 0}>Confirmar Pedido</button>
      </footer>
    </CartContentContainer>
  );
}
