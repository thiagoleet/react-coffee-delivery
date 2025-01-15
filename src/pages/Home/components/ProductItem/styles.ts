import styled from "styled-components";

export const ProductItemWrapper = styled.article``;

export const ProductItemContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ProductItemHeader = styled.header``;

export const ProductItemFigure = styled.figure``;

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
`;

export const ProductItemFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCartButton = styled.button`
  background-color: ${({ theme }) => theme["purple-dark"]};
  color: ${({ theme }) => theme["white"]};
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
`;
