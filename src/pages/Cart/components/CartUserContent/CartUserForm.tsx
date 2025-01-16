import { MapPinLine } from "@phosphor-icons/react";
import { CartUserFormContainer, CartUserFormHeader } from "./styles";

export function CartUserForm() {
  return (
    <CartUserFormContainer>
      <CartUserFormHeader>
        <div className="header-icon">
          <MapPinLine size={30} />
        </div>
        <div className="header-text">
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </CartUserFormHeader>
      <form>
        <div>CartUserForm</div>
      </form>
    </CartUserFormContainer>
  );
}
