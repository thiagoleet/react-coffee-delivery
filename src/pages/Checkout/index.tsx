import { MapPin, Money, Timer } from "@phosphor-icons/react";
import {
  CheckooutHeader,
  CheckoutContainer,
  CheckoutContent,
  CheckoutContentDetails,
  CheckoutContentDetailsItem,
  CheckoutContentDetailsItemIcon,
  CheckoutContentDetailsItemText,
  CheckoutImage,
} from "./styles";

export function CheckoutPage() {
  return (
    <CheckoutContainer>
      <CheckooutHeader>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </CheckooutHeader>

      <CheckoutContent>
        <CheckoutContentDetails>
          <CheckoutContentDetailsItem>
            <CheckoutContentDetailsItemIcon className="address">
              <MapPin size={20} />
            </CheckoutContentDetailsItemIcon>
            <CheckoutContentDetailsItemText>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre, RS
            </CheckoutContentDetailsItemText>
          </CheckoutContentDetailsItem>

          <CheckoutContentDetailsItem>
            <CheckoutContentDetailsItemIcon className="timer">
              <Timer size={20} />
            </CheckoutContentDetailsItemIcon>
            <CheckoutContentDetailsItemText>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </CheckoutContentDetailsItemText>
          </CheckoutContentDetailsItem>

          <CheckoutContentDetailsItem>
            <CheckoutContentDetailsItemIcon className="payment">
              <Money size={20} />
            </CheckoutContentDetailsItemIcon>
            <CheckoutContentDetailsItemText>
              Pagamento na entrega
              <br />
              <strong>Cartão de Crédito</strong>
            </CheckoutContentDetailsItemText>
          </CheckoutContentDetailsItem>
        </CheckoutContentDetails>

        <CheckoutImage>
          <img src="/delivery.png" />
        </CheckoutImage>
      </CheckoutContent>
    </CheckoutContainer>
  );
}
