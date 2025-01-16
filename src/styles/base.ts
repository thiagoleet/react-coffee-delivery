import styled from "styled-components";

export const BaseCard = styled.div`
  background-color: ${({ theme }) => theme["base-card"]};
  padding: 1.5rem 2rem;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
