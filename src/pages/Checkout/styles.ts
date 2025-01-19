import { BaseCard } from "@/styles/base";
import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CheckooutHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: ${({ theme }) => theme["yellow-dark"]};
    font-size: 2rem;
  }

  p {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.3rem;
  }
`;

export const CheckoutContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  justify-content: flex-start;
  justify-content: space-between;
`;

export const CheckoutContentDetails = styled(BaseCard)`
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-top-color: ${({ theme }) => theme["yellow-dark"]};
  border-right-color: ${({ theme }) => theme["purple-base"]};
  border-bottom-color: ${({ theme }) => theme["purple-dark"]};
  border-left-color: ${({ theme }) => theme["yellow-brand"]};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-around;
`;

export const CheckoutContentDetailsItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const CheckoutContentDetailsItemIcon = styled.span`
  border-radius: 50%;
  color: ${({ theme }) => theme["base-card"]};
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.address {
    background-color: ${({ theme }) => theme["purple-base"]};
  }

  &.timer {
    background-color: ${({ theme }) => theme["yellow-brand"]};
  }

  &.payment {
    background-color: ${({ theme }) => theme["yellow-dark"]};
  }
`;

export const CheckoutContentDetailsItemText = styled.p`
  line-height: 1.6;
`;

export const CheckoutImage = styled.figure`
  display: flex;
`;
