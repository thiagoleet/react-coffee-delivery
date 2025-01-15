import React from "react";
import { ProductItem } from "../ProductItem";
import { ProductsShowcase, ShowCaseTitle, ShowCaseWrapper } from "./styles";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";

export function Showcase() {
  const { coffees } = React.useContext(CoffeesContext);

  return (
    <ShowCaseWrapper>
      <ShowCaseTitle>Nossos cafés</ShowCaseTitle>
      <ProductsShowcase>
        {coffees.map((coffee) => (
          <ProductItem
            key={coffee.id}
            coffee={coffee}
          />
        ))}
      </ProductsShowcase>
    </ShowCaseWrapper>
  );
}
