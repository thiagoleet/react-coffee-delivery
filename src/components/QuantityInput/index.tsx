import React from "react";
import { QuantityInputWrapper } from "./styles";

const MAX_QUANTITY = 9;
const MIN_QUANTITY = 1;
const STEP = 1;
const DEFAULT_VALUE = 1;

interface QuantityInputProps {
  onUpdate: (value: number) => void;
  value: number;
  size?: "md" | "sm";
}

export function QuantityInput({ onUpdate, value, size }: QuantityInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleDecrease() {
    if (inputRef.current) {
      let value = parseInt(inputRef.current.value) - 1;
      value = value < MIN_QUANTITY ? MIN_QUANTITY : value;
      inputRef.current.value = String(value);
      onUpdate(value);
    }
  }

  function handleIncrease() {
    if (inputRef.current) {
      let value = parseInt(inputRef.current.value) + 1;
      value = value > MAX_QUANTITY ? MAX_QUANTITY : value;
      inputRef.current.value = String(value);
      onUpdate(value);
    }
  }

  const sizeClass = size ?? "md";

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = String(value);
    }
  }, [value]);

  return (
    <QuantityInputWrapper className={sizeClass}>
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
