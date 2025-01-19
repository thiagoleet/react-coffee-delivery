import { CartUserForm } from "./CartUserForm";
import { PaymentContent } from "./PaymentContent";
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

      <PaymentMethodWrapper>
        <PaymentContent />
      </PaymentMethodWrapper>
    </CartUserContentContainer>
  );
}
