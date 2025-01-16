import React from "react";
import { CartContent } from "./components/CartContent";
import { CartUserContent } from "./components/CartUserContent";
import {
  CartContainer,
  CartContentWrapper,
  CartEmptyState,
  CartTitle,
  CartUserContentWrapper,
} from "./styles";
import { CoffeesContext } from "@/contexts/CoffeesContext";
import { NavLink } from "react-router-dom";

export function CartPage() {
  const { getNumberOfItemsInCart } = React.useContext(CoffeesContext);

  const numberOfItemsInCart = getNumberOfItemsInCart();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <CartContainer>
      {numberOfItemsInCart === 0 && (
        <CartEmptyState>
          <h1>Seu carrinho está vazio</h1>
          <p>Adicione cafés ao seu carrinho para continuar</p>
          <NavLink to="/">Veja nossos cafés</NavLink>
        </CartEmptyState>
      )}

      {numberOfItemsInCart > 0 && (
        <form onSubmit={handleSubmit}>
          <CartUserContentWrapper>
            <CartTitle>Complete seu pedido</CartTitle>
            <CartUserContent />
          </CartUserContentWrapper>

          <CartContentWrapper>
            <CartTitle>Cafés selecionados</CartTitle>
            <CartContent />
          </CartContentWrapper>
        </form>
      )}
    </CartContainer>
  );
}
