import { QuantityInput } from "@/components/QuantityInput";
import {
  CartContentItemActions,
  CartContentItemContainer,
  CartContentItemDescription,
  CartContentItemImage,
  CartContentItemRemoveButton,
  CartContentItemWrapper,
} from "./styles";
import { CartItem } from "@/models/Cart";
import { Trash } from "@phosphor-icons/react";

export interface CartCartContentItemProps {
  item: CartItem;
}

export function CartContentItem({ item }: CartCartContentItemProps) {
  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(item.coffee.price ? item.coffee.price / 100 : 0);

  return (
    <CartContentItemWrapper>
      <CartContentItemImage>
        <img
          src={item.coffee.image}
          alt={item.coffee.name}
        />
      </CartContentItemImage>
      <CartContentItemContainer>
        <CartContentItemDescription>
          <h4>{item.coffee.name}</h4>
          <span>{price}</span>
        </CartContentItemDescription>
        <CartContentItemActions>
          <QuantityInput
            onUpdate={() => {}}
            value={1}
            size="sm"
          />
          <CartContentItemRemoveButton>
            <Trash />
            <span>Remover</span>
          </CartContentItemRemoveButton>
        </CartContentItemActions>
      </CartContentItemContainer>
    </CartContentItemWrapper>
  );
}
