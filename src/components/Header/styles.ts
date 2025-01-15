import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const LogoContainer = styled.span`
  flex: 1;
`;

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme["yellow-light"]};
  color: ${({ theme }) => theme["yellow-dark"]};
  border: 0;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme["yellow-dark"]};
    color: ${({ theme }) => theme["yellow-light"]};
  }
`;
