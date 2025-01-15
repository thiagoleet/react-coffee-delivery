import { QuantityInput } from "../../../../components/QuantityInput";
import { CartButton } from "./CartButton";
import {
  ProductItemContent,
  ProductItemDescription,
  ProductItemFigure,
  ProductItemFooter,
  ProductItemHeader,
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
          <ProductItemFigure>Imagem</ProductItemFigure>
          <ProductItemTags>
            <ProductItemTag>tradicional</ProductItemTag>
            <ProductItemTag>tradicional</ProductItemTag>
            <ProductItemTag>tradicional</ProductItemTag>
          </ProductItemTags>
        </ProductItemHeader>
        <ProductItemTitle>Expresso Tradicional</ProductItemTitle>
        <ProductItemDescription>
          O tradicional café feito com água quente e grãos moídos
        </ProductItemDescription>

        <ProductItemFooter>
          <div>
            <span>R$</span>
            <span>9,99</span>
          </div>
          <QuantityInput />
          <CartButton />
        </ProductItemFooter>
      </ProductItemContent>
    </ProductItemWrapper>
  );
}
