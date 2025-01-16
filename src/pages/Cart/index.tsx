import { CartContent } from "./components/CartContent";
import { CartUserContent } from "./components/CartUserContent";
import {
  CartContainer,
  CartContentWrapper,
  CartTitle,
  CartUserContentWrapper,
} from "./styles";

export function CartPage() {
  return (
    <CartContainer>
      <CartUserContentWrapper>
        <CartTitle>Complete seu pedido</CartTitle>
        <CartUserContent />
      </CartUserContentWrapper>

      <CartContentWrapper>
        <CartTitle>Cafés selecionados</CartTitle>
        <CartContent />
      </CartContentWrapper>
    </CartContainer>
  );
}
