import { BaseCard } from "@/styles/base";
import styled from "styled-components";

export const ProductItemWrapper = styled.article`
  margin-top: 50px;
`;

export const ProductItemContent = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ProductItemHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

export const ProductItemFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  flex: 1;

  img {
    margin: 0 auto;
    position: absolute;
    top: -50px;
    width: 100px;
    height: 100px;
  }
`;

export const ProductItemTags = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

export const ProductItemTag = styled.span`
  text-transform: uppercase;
  font-size: 0.65rem;
  background-color: ${({ theme }) => theme["yellow-light"]};
  color: ${({ theme }) => theme["yellow-dark"]};
  padding: 0.15rem 0.5rem;
  border-radius: 8px;
`;

export const ProductItemTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const ProductItemDescription = styled.p`
  color: ${({ theme }) => theme["base-label"]};
  font-size: 0.8rem;
  font-weight: 300;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ProductItemFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProductCartButton = styled.button`
  background-color: ${({ theme }) => theme["purple-dark"]};
  color: ${({ theme }) => theme["base-card"]};
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme["purple-base"]};
  }

  @media screen and (max-width: 768px) {
    grid-column: 2 / span 2;
    width: 100%;
  }
`;

export const ProductItemPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: baseline;
  gap: 0.25rem;

  @media screen and (max-width: 768px) {
    grid-column: 1 / span 3;
    justify-content: center;
    padding-bottom: 1rem;
  }
`;

export const ProductItemPriceCurrency = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme["base-text"]};
`;

export const ProductItemPriceValue = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme["base-text"]};
`;
