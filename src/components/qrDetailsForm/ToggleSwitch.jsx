import * as React from "react";

export function ToggleSwitch({ label, id }) {
  return (
    <div className="flex flex-wrap gap-5 justify-between p-5 bg-white border-t border-b border-gray-200 max-md:max-w-full">
      <label
        htmlFor={id}
        className="my-auto text-sm font-medium tracking-normal leading-snug text-zinc-900"
      >
        {label}
      </label>
      <div
        role="switch"
        tabIndex={0}
        aria-checked="true"
        id={id}
        className="flex flex-col justify-center items-start px-1.5 py-1 bg-sky-600 rounded-3xl"
      >
        <div className="flex shrink-0 w-2.5 h-2.5 bg-white rounded-full" />
      </div>
    </div>
  );
}
