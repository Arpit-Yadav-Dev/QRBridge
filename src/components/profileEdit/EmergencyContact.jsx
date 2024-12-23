import React from "react";
import { InputField } from "./InputField";

export function EmergencyContact({ data, onInputChange }) {
  const emergencyFields = [
    { label: "Name", value: data.emergencyName, type: "text", field: "emergencyName" },
    { label: "Phone No", value: data.emergencyPhone, type: "tel", field: "emergencyPhone" },
    { label: "Relation", value: data.emergencyRelation, type: "text", field: "emergencyRelation", hasIcon: true },
  ];

  return (
    <>
      <div className="px-5 py-4 mt-5 bg-gray-200 text-zinc-900 max-md:max-w-full">
        Emergency Contacts
      </div>
      {emergencyFields.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          value={field.value}
          type={field.type}
          hasIcon={field.hasIcon}
          onChange={(e) => onInputChange(field.field, e.target.value)}
        />
      ))}
    </>
  );
}
