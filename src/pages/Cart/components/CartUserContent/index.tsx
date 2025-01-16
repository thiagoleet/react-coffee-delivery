import { CartUserForm } from "./CartUserForm";
import {
  CartUserContentContainer,
  CartUserFormWrapper,
  PaymentMethodWrapper,
} from "./styles";

export function CartUserContent() {
  return (
    <CartUserContentContainer>
      <CartUserFormWrapper>
        <CartUserForm />
      </CartUserFormWrapper>

      <PaymentMethodWrapper></PaymentMethodWrapper>
    </CartUserContentContainer>
  );
}
