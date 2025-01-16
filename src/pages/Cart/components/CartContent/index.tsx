import React from "react";
import { CartContentItem } from "./CartContentItem";
import {
  CartContentContainer,
  CartContentFooter,
  CartContentFooterDescription,
  CartContentFooterDescriptionItem,
  CartContentFooterTotal,
  CartContentItemsWrapper,
  CartSubmitButton,
} from "./styles";
import { CoffeesContext } from "@/contexts/CoffeesContext";
import { CartItem } from "@/models/Cart";

export function CartContent() {
  const { cart, city, addCoffeeToCart, removeFromCart } =
    React.useContext(CoffeesContext);

  const isSubmitDisabled = cart?.items.length === 0 || !city;

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
      <CartContentFooter>
        <CartContentFooterDescription>
          <CartContentFooterDescriptionItem>
            <span>Total de itens</span>
            <span></span>
          </CartContentFooterDescriptionItem>
          <CartContentFooterDescriptionItem>
            {city && (
              <>
                <span>Entrega</span>
                <span></span>
              </>
            )}
          </CartContentFooterDescriptionItem>
          <CartContentFooterTotal>Total</CartContentFooterTotal>
        </CartContentFooterDescription>
        <CartSubmitButton disabled={isSubmitDisabled}>
          Confirmar Pedido
        </CartSubmitButton>
      </CartContentFooter>
    </CartContentContainer>
  );
}
