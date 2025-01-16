import { CityPicker } from "./CityPicker";
import { HeaderCart } from "./HeaderCart";
import { HeaderContainer, LogoContainer } from "./styles";
import ImgLogo from "@/assets/logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <NavLink to="/">
          <img
            src={ImgLogo}
            alt="Coffee Delivery Logo"
          />
        </NavLink>
      </LogoContainer>
      <CityPicker />
      <HeaderCart />
    </HeaderContainer>
  );
}
