import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import {
  CartUserFormContainer,
  CartUserFormHeader,
  RadioButton,
  RadioContainer,
  RadioLabel,
  RadioWrapper,
} from "./styles";

export function PaymentContent() {
  return (
    <CartUserFormContainer>
      <CartUserFormHeader>
        <div className="header-icon-payment">
          <CurrencyDollar size={30} />
        </div>
        <div className="header-text">
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </CartUserFormHeader>

      <RadioContainer>
        <RadioWrapper>
          <RadioButton
            type="radio"
            name="payment"
            id="credit-card"
            value="credit-card"
            required
          />
          <RadioLabel htmlFor="credit-card">
            <span className="icon">
              <CreditCard size={30} />
            </span>
            <span className="text">Cartão de Crédito</span>
          </RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <RadioButton
            type="radio"
            name="payment"
            id="debit-card"
            value="debit-card"
            required
          />
          <RadioLabel htmlFor="debit-card">
            {" "}
            <span className="icon">
              <Bank size={30} />
            </span>
            <span className="text">Cartão de Débito</span>
          </RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <RadioButton
            type="radio"
            name="payment"
            id="money"
            value="money"
            required
          />
          <RadioLabel htmlFor="money">
            {" "}
            <span className="icon">
              <Money size={30} />
            </span>
            <span className="text">Dinheiro</span>
          </RadioLabel>
        </RadioWrapper>
      </RadioContainer>
    </CartUserFormContainer>
  );
}
