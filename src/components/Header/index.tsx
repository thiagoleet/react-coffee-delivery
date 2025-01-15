import { HeaderCart } from "./HeaderCart";
import { HeaderContainer, LogoContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>Logo</LogoContainer>
      <nav>Cidade</nav>
      <HeaderCart />
    </HeaderContainer>
  );
}
