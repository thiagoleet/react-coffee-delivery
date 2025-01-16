import React from "react";
import { QuantityInput } from "@/components/QuantityInput";
import { Coffee } from "@/models/Coffee";
import { CartButton } from "./CartButton";
import {
  ProductItemContent,
  ProductItemDescription,
  ProductItemFigure,
  ProductItemFooter,
  ProductItemHeader,
  ProductItemPriceCurrency,
  ProductItemPriceValue,
  ProductItemPriceWrapper,
  ProductItemTag,
  ProductItemTags,
  ProductItemTitle,
  ProductItemWrapper,
} from "./styles";
import { CoffeesContext } from "@/contexts/CoffeesContext";

interface ProductItemProps {
  coffee: Coffee;
}

export function ProductItem({ coffee }: ProductItemProps) {
  const { addCoffeeToCart } = React.useContext(CoffeesContext);
  const [quantity, setQuantity] = React.useState(1);

  function handleUpdateQuantity(value: number) {
    setQuantity(value);
  }

  function handleAddToCart() {
    console.log("Adding to cart", coffee, quantity);
    addCoffeeToCart(coffee, quantity);
  }

  const price = new Intl.NumberFormat("pt-BR").format(
    coffee.price ? coffee.price / 100 : 0
  );

  return (
    <ProductItemWrapper>
      <ProductItemContent>
        <ProductItemHeader>
          <ProductItemFigure>
            <img
              src={coffee.image}
              alt={coffee.description}
            />
          </ProductItemFigure>
          <ProductItemTags>
            {coffee.tags.map((tag) => (
              <ProductItemTag key={tag}>{tag}</ProductItemTag>
            ))}
          </ProductItemTags>
        </ProductItemHeader>
        <ProductItemTitle>{coffee.name}</ProductItemTitle>
        <ProductItemDescription>{coffee.description}</ProductItemDescription>

        <ProductItemFooter>
          <ProductItemPriceWrapper>
            <ProductItemPriceCurrency>R$</ProductItemPriceCurrency>
            <ProductItemPriceValue>{price}</ProductItemPriceValue>
          </ProductItemPriceWrapper>
          <QuantityInput
            value={quantity}
            onUpdate={handleUpdateQuantity}
          />
          <CartButton onClick={handleAddToCart} />
        </ProductItemFooter>
      </ProductItemContent>
    </ProductItemWrapper>
  );
}
