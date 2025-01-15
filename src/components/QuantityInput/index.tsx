import React from "react";
import { QuantityInputWrapper } from "./styles";

const MAX_QUANTITY = 9;
const MIN_QUANTITY = 1;
const STEP = 1;
const DEFAULT_VALUE = 1;

export function QuantityInput() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleDecrease() {
    if (inputRef.current) {
      let value = parseInt(inputRef.current.value) - 1;
      value = value < MIN_QUANTITY ? MIN_QUANTITY : value;
      inputRef.current.value = String(value);
    }
  }

  function handleIncrease() {
    if (inputRef.current) {
      let value = parseInt(inputRef.current.value) + 1;
      value = value > MAX_QUANTITY ? MAX_QUANTITY : value;
      inputRef.current.value = String(value);
    }
  }

  return (
    <QuantityInputWrapper>
      <button onClick={handleDecrease}>-</button>
      <input
        type="number"
        min={MIN_QUANTITY}
        max={MAX_QUANTITY}
        step={STEP}
        defaultValue={DEFAULT_VALUE}
        ref={inputRef}
      />
      <button onClick={handleIncrease}>+</button>
    </QuantityInputWrapper>
  );
}
