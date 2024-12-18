import * as React from "react";

export function InputFieldReward({ label, value, iconSrc, type = "text" }) {
  const inputId = `${label.toLowerCase()}-input`;

  return (
    <>
      <label
        htmlFor={inputId}
        className="self-start mt-5 text-xs tracking-tight leading-relaxed text-zinc-500"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <div
          className="px-3.5 pt-5 pb-24 mt-2 rounded border border-gray-200 border-solid bg-neutral-50 text-ellipsis text-zinc-900"
          role="textbox"
          tabIndex={0}
          id={inputId}
        >
          {value}
        </div>
      ) : (
        <div className="flex gap-5 justify-between px-3.5 py-4 mt-2 whitespace-nowrap rounded border border-gray-200 border-solid bg-neutral-50 text-zinc-900">
          <input
            type={type}
            id={inputId}
            value={value}
            className="my-auto text-ellipsis bg-transparent border-none outline-none"
          />
          {iconSrc && (
            <img
              loading="lazy"
              src={iconSrc}
              className="object-contain shrink-0 w-4 aspect-square"
              alt=""
            />
          )}
        </div>
      )}
    </>
  );
}
