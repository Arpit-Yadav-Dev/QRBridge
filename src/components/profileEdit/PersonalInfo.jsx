import React from "react";
import { InputField } from "./InputField";

export function PersonalInfo({ data, onInputChange }) {
  const personalFields = [
    { label: "Name", value: data.name, type: "text", field: "name" },
    { label: "Date of Birth", value: data.dob, type: "text", field: "dob" },
    { label: "Blood Group", value: data.bloodGroup, type: "text", field: "bloodGroup", hasIcon: true },
  ];

  return (
    <div>
      <div className="px-5 py-4 bg-gray-200 text-zinc-900 max-md:max-w-full">
        Personal Information
      </div>
      {personalFields.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          value={field.value}
          type={field.type}
          hasIcon={field.hasIcon}
          onChange={(e) => onInputChange(field.field, e.target.value)}
        />
      ))}
    </div>
  );
}
