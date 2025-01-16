import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
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

    .badge {
      background-color: ${({ theme }) => theme["yellow-light"]};
      color: ${({ theme }) => theme["yellow-dark"]};
    }
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

const CityPickerBase = styled.div`
  color: ${({ theme }) => theme["purple-base"]};
  background-color: ${({ theme }) => theme["purple-light"]};
  border-radius: 8px;
  cursor: pointer;
  font-weight: normal;
`;

export const CityPickerContainer = styled(CityPickerBase)`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  position: relative;
  margin: 0;
  min-width: 10rem;
`;

export const CityPickerSelect = styled(CityPickerBase)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const CityPickerSelectItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 8px;
  font-size: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme["purple-light"]};
    background-color: ${({ theme }) => theme["purple-base"]};
  }
`;
