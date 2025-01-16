import { MapPin } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import {
  CityPickerContainer,
  CityPickerSelect,
  CityPickerSelectItem,
} from "./styles";
import React from "react";
import { CoffeesContext } from "@/contexts/CoffeesContext";
import { City } from "@/models/City";

export function CityPicker() {
  const { cities, city, selectCity } = React.useContext(CoffeesContext);
  const [showOptions, setShowOptions] = React.useState(false);

  function handleShowOptions() {
    setShowOptions(true);
  }

  function handleSelectCity(city: City) {
    setShowOptions(false);
    selectCity(city);
    toast.success(`Alterado para: ${city.name}`);
  }

  return (
    <CityPickerContainer>
      <CityPickerSelectItem onClick={handleShowOptions}>
        <MapPin />

        {city ? `${city.name}, ${city.state}` : "Selecione uma cidade"}
      </CityPickerSelectItem>

      {showOptions && (
        <CityPickerSelect>
          <ul>
            {cities.map((city) => (
              <CityPickerSelectItem
                key={city.id}
                onClick={() => handleSelectCity(city)}
              >
                <MapPin /> {city.name}, {city.state}
              </CityPickerSelectItem>
            ))}
          </ul>
        </CityPickerSelect>
      )}
    </CityPickerContainer>
  );
}
