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
import toast from "react-hot-toast";

export function CartContent() {
  const { cart, city, addCoffeeToCart, removeFromCart, getSubtotal, getTotal } =
    React.useContext(CoffeesContext);

  const isSubmitDisabled = cart?.items.length === 0 || !city;
  const subtotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cart.items.length > 0 ? getSubtotal() / 100 : 0);

  const total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cart.items.length > 0 ? getTotal() / 100 : 0);

  const shipping = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(city ? city.shippingAmount / 100 : 0);

  function handleUpdateItem(item: CartItem) {
    addCoffeeToCart(item.coffee, item.quantity);
  }

  function handleRemoveItem(item: CartItem) {
    removeFromCart(item.coffee);
  }

  React.useEffect(() => {
    if (!city) {
      toast.error("Selecione uma cidade para calcular a entrega");
    }
  }, [city]);

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
            <span>{subtotal}</span>
          </CartContentFooterDescriptionItem>
          <CartContentFooterDescriptionItem>
            <span>Entrega</span>
            <span>{shipping}</span>
          </CartContentFooterDescriptionItem>
          <CartContentFooterTotal>
            <span>Total</span>
            <span>{total}</span>
          </CartContentFooterTotal>
        </CartContentFooterDescription>

        {!city && <small>Selecione uma cidade para calcular a entrega</small>}

        <CartSubmitButton disabled={isSubmitDisabled}>
          Confirmar Pedido
        </CartSubmitButton>
      </CartContentFooter>
    </CartContentContainer>
  );
}
