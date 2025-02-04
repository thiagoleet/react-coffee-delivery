import React from "react";
import toast from "react-hot-toast";
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
  onUpdate: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
}

export function CartContentItem({
  item,
  onUpdate,
  onRemove,
}: CartCartContentItemProps) {
  const [quantity, setQuantity] = React.useState(item.quantity);

  function handleUpdateQuantity(value: number) {
    setQuantity(value);
    onUpdate({
      ...item,
      quantity: value,
    });
    toast.success(`${item.coffee.name}\n quantidade alterada para ${value}`);
  }

  function handleRemove() {
    onRemove(item);
    toast.success(`${item.coffee.name} removido`);
  }

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
            onUpdate={handleUpdateQuantity}
            value={quantity}
            size="sm"
          />
          <CartContentItemRemoveButton onClick={handleRemove}>
            <Trash />
            <span>Remover</span>
          </CartContentItemRemoveButton>
        </CartContentItemActions>
      </CartContentItemContainer>
    </CartContentItemWrapper>
  );
}
