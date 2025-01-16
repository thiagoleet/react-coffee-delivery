import styled from "styled-components";

export const CartUserContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartUserFormWrapper = styled.section`
  margin-bottom: 1rem;
  width: 100%;
`;

export const PaymentMethodWrapper = styled.section`
  width: 100%;
`;

export const CartUserFormContainer = styled.div`
  background-color: ${({ theme }) => theme["base-card"]};
  padding: 1.5rem 2rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  form {
    width: 100%;
  }
`;

export const CartUserFormHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: flex-start;
  align-items: start;

  .header-icon {
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  .header-text {
    color: ${({ theme }) => theme["base-text"]};

    h3 {
      font-weight: normal;
      font-size: 1.2rem;
      line-height: 1.6;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`;
