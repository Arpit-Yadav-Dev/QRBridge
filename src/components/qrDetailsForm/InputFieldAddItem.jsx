import * as React from "react";

export function InputFieldAddItem({ label, value, id, multiline, disabled }) {
  return (
    <>
      <label
        htmlFor={id}
        className="self-start text-xs font-medium tracking-tight leading-relaxed text-zinc-500"
      >
        {label}
      </label>
      <div
        role={multiline ? "textbox" : undefined}
        tabIndex={multiline ? 0 : undefined}
        aria-label={label}
        id={id}
        className={`px-3.5 py-5 mt-2 text-sm font-medium tracking-normal leading-snug rounded border border-gray-200 border-solid bg-neutral-50 text-ellipsis text-zinc-900 max-md:pr-5 max-md:max-w-full ${
          multiline ? "pb-24 max-md:pb-28" : ""
        }`}
      >
        {value}
      </div>
    </>
  );
}
