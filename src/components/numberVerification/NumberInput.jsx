import * as React from "react";

const NumberInput = ({ value }) => {
  return (
    <input
      type="text"
      maxLength="1"
      value={value}
      aria-label="Enter verification digit"
      className="px-5 w-12 h-12 rounded border border-gray-200 border-solid bg-neutral-50"
    />
  );
};

export default NumberInput;
