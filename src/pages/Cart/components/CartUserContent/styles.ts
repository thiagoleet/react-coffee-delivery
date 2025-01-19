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

    &-payment {
      color: ${({ theme }) => theme["purple-base"]};
    }
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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const InputField = styled.input`
  background-color: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 8px;
  padding: 1rem 1rem;
  color: ${({ theme }) => theme["base-text"]};
  outline-color: ${({ theme }) => theme["yellow-dark"]};

  &::placeholder {
    color: ${({ theme }) => theme["base-label"]};
  }

  &::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: ${({ theme }) => theme["base-label"]};
  }

  &.full {
    flex: 1;
  }

  &.md {
    flex: 0.5;
  }

  &.sm {
    flex: 0.25;
  }
`;
export const RadioContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioButton = styled.input`
  position: absolute;
  z-index: -1;
  &:checked + label {
    border-color: ${({ theme }) => theme["purple-base"]};
    background-color: ${({ theme }) => theme["purple-light"]};
  }
`;

export const RadioLabel = styled.label`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme["base-button"]};
  background-color: ${({ theme }) => theme["base-button"]};
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 0.9rem;

  .text {
  }

  .icon {
    color: ${({ theme }) => theme["purple-base"]};
  }
`;
