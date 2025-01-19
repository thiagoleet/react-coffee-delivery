import React from "react";
import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

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
import {
  cartFormDataValidationSchema,
  CartFormData,
} from "./schemas/CartFormData.schema";

export function CartPage() {
  const { getNumberOfItemsInCart } = React.useContext(CoffeesContext);

  const cartForm = useForm<CartFormData>({
    resolver: zodResolver(cartFormDataValidationSchema),
  });

  const numberOfItemsInCart = getNumberOfItemsInCart();

  function handleCheckout(data: CartFormData) {
    console.log(data);
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
        <form onSubmit={cartForm.handleSubmit(handleCheckout)}>
          <FormProvider {...cartForm}>
            <CartUserContentWrapper>
              <CartTitle>Complete seu pedido</CartTitle>
              <CartUserContent />
            </CartUserContentWrapper>

            <CartContentWrapper>
              <CartTitle>Cafés selecionados</CartTitle>
              <CartContent />
            </CartContentWrapper>
          </FormProvider>
        </form>
      )}
    </CartContainer>
  );
}
