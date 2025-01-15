import styled from "styled-components";

export const QuantityInputWrapper = styled.div`
  background-color: ${({ theme }) => theme["base-button"]};
  border-radius: 8px;
  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  justify-content: space-between;

  input {
    color: ${({ theme }) => theme["base-title"]};
    border: 0;
    text-align: center;
    background-color: transparent;
    flex: 1;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    color: ${({ theme }) => theme["purple-base"]};
  }
`;
