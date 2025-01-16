import styled from "styled-components";

export const JumbotronContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const JumbotronContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const JumbotronTitle = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme["base-title"]};
`;

export const JumbotronDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme["base-subtitle"]};
  margin-bottom: 3rem;
`;

export const JumbotronItems = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const JumbotronItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;
  gap: 0.5rem;

  span {
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.8rem;
  }
`;

export const JumbotronItemIcon = styled.div`
  border-radius: 50%;
  color: ${({ theme }) => theme["base-card"]};
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.shopping-cart {
    background-color: ${({ theme }) => theme["yellow-dark"]};
  }

  &.package {
    background-color: ${({ theme }) => theme["base-text"]};
  }

  &.timer {
    background-color: ${({ theme }) => theme["yellow-brand"]};
  }

  &.coffee {
    background-color: ${({ theme }) => theme["purple-base"]};
  }
`;

export const JumbotronImage = styled.figure`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
