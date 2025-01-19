import { useFormContext } from "react-hook-form";
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
  const { register } = useFormContext();

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
            id="credit-card"
            value="credit-card"
            required
            {...register("paymentMethod")}
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
            id="debit-card"
            value="debit-card"
            required
            {...register("paymentMethod")}
          />
          <RadioLabel htmlFor="debit-card">
            <span className="icon">
              <Bank size={30} />
            </span>
            <span className="text">Cartão de Débito</span>
          </RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <RadioButton
            type="radio"
            id="money"
            value="money"
            required
            {...register("paymentMethod")}
          />
          <RadioLabel htmlFor="money">
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
