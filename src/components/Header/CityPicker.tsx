import { MapPin } from "@phosphor-icons/react";
import { CityPickerContainer, CityPickerSelectItem } from "./styles";
import React from "react";
import { CoffeesContext } from "@/contexts/CoffeesContext";

export function CityPicker() {
  const { city } = React.useContext(CoffeesContext);

  return (
    <CityPickerContainer>
      <CityPickerSelectItem>
        <MapPin />

        {city ? `${city.name}, ${city.state}` : "Cidade não selecionada"}
      </CityPickerSelectItem>
    </CityPickerContainer>
  );
}
