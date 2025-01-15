import { QuantityInput } from "../../../../components/QuantityInput";
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

export function ProductItem() {
  return (
    <ProductItemWrapper>
      <ProductItemContent>
        <ProductItemHeader>
          <ProductItemFigure>
            <img src="/expresso.png" />
          </ProductItemFigure>
          <ProductItemTags>
            <ProductItemTag>tradicional</ProductItemTag>
          </ProductItemTags>
        </ProductItemHeader>
        <ProductItemTitle>Expresso Tradicional</ProductItemTitle>
        <ProductItemDescription>
          O tradicional café feito com água quente e grãos moídos
        </ProductItemDescription>

        <ProductItemFooter>
          <ProductItemPriceWrapper>
            <ProductItemPriceCurrency>R$</ProductItemPriceCurrency>
            <ProductItemPriceValue>9,99</ProductItemPriceValue>
          </ProductItemPriceWrapper>
          <QuantityInput />
          <CartButton />
        </ProductItemFooter>
      </ProductItemContent>
    </ProductItemWrapper>
  );
}
