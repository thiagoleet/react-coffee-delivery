import { ProductItem } from "../ProductItem";
import { ProductsShowcase, ShowCaseTitle, ShowCaseWrapper } from "./styles";

export function Showcase() {
  return (
    <ShowCaseWrapper>
      <ShowCaseTitle>Nossos cafés</ShowCaseTitle>
      <ProductsShowcase>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductsShowcase>
    </ShowCaseWrapper>
  );
}
