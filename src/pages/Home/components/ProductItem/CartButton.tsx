import React from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { ProductCartButton } from "./styles";

type CartButtonProps = {
  loading?: boolean; // custom prop
} & React.PropsWithChildren<React.ComponentPropsWithRef<"button">>;

export const CartButton: React.FC<CartButtonProps> = ({ ...props }) => {
  return (
    <ProductCartButton {...props}>
      <ShoppingCart />
    </ProductCartButton>
  );
};
