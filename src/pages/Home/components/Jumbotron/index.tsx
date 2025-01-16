import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  JumbotronContainer,
  JumbotronContent,
  JumbotronDescription,
  JumbotronImage,
  JumbotronItem,
  JumbotronItemIcon,
  JumbotronItems,
  JumbotronTitle,
} from "./styles";

export function Jumbotron() {
  return (
    <JumbotronContainer>
      <JumbotronContent>
        <JumbotronTitle>
          Encontre o café perfeito para qualquer hora do dia
        </JumbotronTitle>
        <JumbotronDescription>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </JumbotronDescription>
        <JumbotronItems>
          <JumbotronItem>
            <JumbotronItemIcon className="shopping-cart">
              <ShoppingCart size={18} />
            </JumbotronItemIcon>
            <span>Compra simples e segura</span>
          </JumbotronItem>
          <JumbotronItem>
            <JumbotronItemIcon className="package">
              <Package size={18} />
            </JumbotronItemIcon>
            <span>Embalagem mantém o café intacto</span>
          </JumbotronItem>
          <JumbotronItem>
            <JumbotronItemIcon className="timer">
              <Timer size={18} />
            </JumbotronItemIcon>
            <span>Entrega rápida e rastreada</span>
          </JumbotronItem>
          <JumbotronItem>
            <JumbotronItemIcon className="coffee">
              <Coffee size={18} />
            </JumbotronItemIcon>
            <span>O café chega fresquinho até você</span>
          </JumbotronItem>
        </JumbotronItems>
      </JumbotronContent>
      <JumbotronImage>
        <img
          src="/banner.png"
          alt="Coffe Delivery"
        />
      </JumbotronImage>
    </JumbotronContainer>
  );
}
