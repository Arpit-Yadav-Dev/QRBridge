import * as React from "react";

export function GenderSelector() {
  const genderOptions = ["Male", "Female"];
  const [selectedGender, setSelectedGender] = React.useState("Male");

  return (
    <>
      <label className="self-start mt-5 text-xs tracking-tight leading-relaxed text-zinc-500">
        Gender
      </label>
      <div className="flex gap-5 self-start mt-2 text-sm tracking-normal leading-snug whitespace-nowrap">
        {genderOptions.map((gender) => (
          <button
            key={gender}
            type="button"
            onClick={() => setSelectedGender(gender)}
            className={`p-5 rounded ${
              selectedGender === gender
                ? "text-white bg-sky-600"
                : "border border-gray-200 border-solid bg-neutral-50 text-zinc-900"
            }`}
            aria-pressed={selectedGender === gender}
          >
            {gender}
          </button>
        ))}
      </div>
    </>
  );
}
