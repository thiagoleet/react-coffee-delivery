import styled from "styled-components";

export const CartContainer = styled.main`
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const CartUserContentWrapper = styled.div`
  flex: 1;
`;

export const CartContentWrapper = styled.div`
  width: 25rem;
`;

export const CartTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CartEmptyState = styled.div`
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    border: 0;
    border-radius: 8px;
    background-color: ${({ theme }) => theme["yellow-brand"]};
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;

    &:hover {
      background-color: ${({ theme }) => theme["yellow-dark"]};
    }
  }
`;
