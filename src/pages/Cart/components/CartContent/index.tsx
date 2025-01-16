import React from "react";
import { CartContentItem } from "./CartContentItem";
import { CartContentContainer, CartContentItemsWrapper } from "./styles";
import { CoffeesContext } from "@/contexts/CoffeesContext";
import { CartItem } from "@/models/Cart";

export function CartContent() {
  const { cart, addCoffeeToCart, removeFromCart } =
    React.useContext(CoffeesContext);

  function handleUpdateItem(item: CartItem) {
    addCoffeeToCart(item.coffee, item.quantity);
  }

  function handleRemoveItem(item: CartItem) {
    removeFromCart(item.coffee);
  }

  return (
    <CartContentContainer>
      <CartContentItemsWrapper>
        {cart?.items &&
          cart.items.map((item) => (
            <CartContentItem
              key={item.id}
              item={item}
              onRemove={handleRemoveItem}
              onUpdate={handleUpdateItem}
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
