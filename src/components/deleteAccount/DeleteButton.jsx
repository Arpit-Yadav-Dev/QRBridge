import * as React from "react";

export function DeleteButton() {
  return (
    <button
      type="submit"
      className="overflow-hidden gap-2 self-stretch px-6 py-5 mt-10 text-center text-white whitespace-nowrap bg-red-600 rounded min-h-[48px] max-md:px-5"
    >
      Delete
    </button>
  );
}