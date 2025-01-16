import { Jumbotron } from "./components/Jumbotron";
import { Showcase } from "./components/Showcase";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Jumbotron />
      <Showcase />
    </HomeContainer>
  );
}
