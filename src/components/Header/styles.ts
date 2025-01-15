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
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme["yellow-dark"]};
    color: ${({ theme }) => theme["yellow-light"]};
  }
`;

export const CartButtonBadge = styled.span`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
  background-color: ${({ theme }) => theme["yellow-dark"]};
  color: ${({ theme }) => theme["white"]};
  font-size: 0.6rem;
  font-weight: bold;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CityPickerContainer = styled.nav`
  color: ${({ theme }) => theme["purple-base"]};
  background-color: ${({ theme }) => theme["purple-light"]};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-weight: normal;
`;
