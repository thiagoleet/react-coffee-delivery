import React from "react";
import { MapPinLine } from "@phosphor-icons/react";
import {
  CartUserFormContainer,
  CartUserFormHeader,
  FormLine,
  InputField,
  InputWrapper,
} from "./styles";
import { findAddressByCEP } from "@/services/cep.service";
import { Address } from "@/models/Address";
import toast from "react-hot-toast";
import { CoffeesContext } from "@/contexts/CoffeesContext";

export function CartUserForm() {
  const { selectCity } = React.useContext(CoffeesContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [address, setAddress] = React.useState<Address | null>(null);

  async function handleFetchCEP(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.currentTarget.value.length < 8) {
      return;
    }

    try {
      setIsLoading(true);
      const { value } = event.currentTarget;
      const response = await findAddressByCEP(value);
      const data = (await response.json()) as Address;
      setAddress(data);

      selectCity({
        id: data.city,
        name: data.city,
        state: data.state,
        shippingAmount: 350,
      });

      toast.success("Endereço encontrado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao buscar endereço pelo CEP");
    } finally {
      setIsLoading(false);
    }
  }

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
      <InputWrapper>
        <FormLine>
          <InputField
            placeholder="CEP"
            className="sm"
            onKeyUp={handleFetchCEP}
            maxLength={8}
            required
          />
          {isLoading && <span>Carregando...</span>}
        </FormLine>
        <FormLine>
          <InputField
            placeholder="Rua"
            className="full"
            readOnly
            defaultValue={address?.street}
            required
          />
        </FormLine>
        <FormLine>
          <InputField
            placeholder="Número"
            required
          />
          <InputField
            placeholder="Complemento"
            className="full"
          />
        </FormLine>
        <FormLine>
          <InputField
            placeholder="Bairro"
            className="md"
            required
            readOnly
            defaultValue={address?.neighborhood}
          />
          <InputField
            placeholder="Cidade"
            className="md"
            required
            readOnly
            defaultValue={address?.city}
          />
          <InputField
            placeholder="UF"
            className="sm"
            required
            readOnly
            defaultValue={address?.state}
          />
        </FormLine>
      </InputWrapper>
    </CartUserFormContainer>
  );
}
