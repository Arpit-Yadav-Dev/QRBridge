import * as React from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import { InputFieldAddItem } from "./InputFieldAddItem";

const privacySettings = [
  {
    label: "Show Personal Information on QR Scan",
    id: "personal-info",
  },
  {
    label: "Show Emergency Contacts on QR Scan",
    id: "emergency-contacts",
  },
  {
    label: "Show Address on QR Scan",
    id: "address",
  },
];

function QRDetailsForm() {
  return (
    <form className="flex flex-col pb-5 w-full bg-white max-md:max-w-full">
      <div className="px-16 py-6 w-full text-base font-medium tracking-normal leading-snug bg-white shadow-[0px_8px_16px_rgba(0,0,0,0.06)] text-zinc-900 max-md:px-5 max-md:max-w-full">
        Enter Details
      </div>
      <div className="flex flex-col px-5 mt-5 w-full max-md:max-w-full">
        <InputFieldAddItem label="QR Name" value="Laptop" id="qr-name" />
        <div className="self-start mt-5 text-xs font-medium tracking-tight leading-relaxed text-zinc-500">
          Item Photo
        </div>
        <div className="flex flex-wrap gap-5 justify-between px-3.5 py-4 mt-2 text-sm font-medium tracking-normal leading-snug text-gray-400 rounded border border-gray-200 border-solid bg-neutral-50 max-md:max-w-full">
          <div className="my-auto">Add a Photo</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c65cd8eda6359b6ada26043efcf49325ee16913abf35b367589a02b3121d977?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            className="object-contain shrink-0 w-4 aspect-square"
            alt=""
          />
        </div>
        <InputFieldAddItem
          label="Owner Name"
          value="Sibin Thazhathethil"
          id="owner-name"
        />
        <InputFieldAddItem
          label="Description"
          value="Asus Laptop Silver Color"
          id="description"
          multiline
        />
        <InputFieldAddItem
          label="Date Registered"
          value="20-January-2024"
          id="date-registered"
          disabled
        />
        {privacySettings.map((setting) => (
          <ToggleSwitch
            key={setting.id}
            label={setting.label}
            id={setting.id}
          />
        ))}
        <button
          type="submit"
          className="overflow-hidden gap-2 self-stretch px-6 py-5 mt-6 text-sm font-medium tracking-normal leading-snug text-center text-white whitespace-nowrap bg-sky-600 rounded min-h-[48px] max-md:px-5"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default QRDetailsForm;
