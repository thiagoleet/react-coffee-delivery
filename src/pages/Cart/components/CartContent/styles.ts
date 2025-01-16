import { BaseCard } from "@/styles/base";
import styled from "styled-components";

export const CartContentContainer = styled(BaseCard)`
  display: flex;
  flex-direction: column;
`;

export const CartContentItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartContentItemWrapper = styled.article`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-between;
`;

export const CartContentItemImage = styled.figure`
  padding: 0 1rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CartContentItemContainer = styled.div``;

export const CartContentItemDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  h4 {
    font-weight: normal;
    font-size: 0.8rem;
  }

  span {
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

export const CartContentItemActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.5rem;
`;

export const CartContentItemRemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme["base-button"]};
  padding: 0.5rem;
  color: ${({ theme }) => theme["purple-base"]};
  cursor: pointer;

  span {
    color: ${({ theme }) => theme["base-text"]};
    text-transform: uppercase;
    font-size: 0.7rem;
  }
`;
