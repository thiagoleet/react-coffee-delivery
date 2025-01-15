import { QuantityInput } from "../../../../components/QuantityInput";
import { Coffee } from "../../../../models/Coffee";
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

interface ProductItemProps {
  coffee: Coffee;
}

export function ProductItem({ coffee }: ProductItemProps) {
  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(coffee.price ? coffee.price / 100 : 0);

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
          <QuantityInput />
          <CartButton />
        </ProductItemFooter>
      </ProductItemContent>
    </ProductItemWrapper>
  );
}
