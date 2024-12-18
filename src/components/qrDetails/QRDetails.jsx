import * as React from "react";
import { DetailsHeader } from "./DetailsHeader";
import { ImageGallery } from "./ImageGallery";
import { InfoField } from "./InfoField";
import { ToggleOption } from "./ToggleOption";
import { ActionButton } from "./ActionButton";

export function QRDetails() {
  const infoFields = [
    { label: "QR Name", value: "Asus Laptop" },
    { label: "Category", value: "Personal Belongings" },
    { label: "Owner Name", value: "Sibin Thazhathethil" },
    { label: "Description", value: "Asus Laptop Silver Color" },
    { label: "Date Registered", value: "20-January-2024" },
  ];

  const toggleOptions = [
    "Show Personal Information on QR Scan",
    "Show Emergency Contacts on QR Scan",
    "Show Address on QR Scan",
  ];

  return (
    <div className="flex flex-col pb-5 w-full bg-white max-md:max-w-full">
      <DetailsHeader />
      <div className="flex flex-col px-5 mt-5 w-full max-md:max-w-full">
        <ImageGallery />
        <div className="flex flex-col items-start mt-6 ml-5 max-w-full font-medium w-[161px] max-md:ml-2.5">
          {infoFields.map((field, index) => (
            <div
              key={index}
              className={`${index > 0 ? "mt-6" : ""} ${
                field.label === "Description" ? "self-stretch w-full" : ""
              }`}
            >
              <InfoField label={field.label} value={field.value} />
            </div>
          ))}
        </div>

        {toggleOptions.map((option, index) => (
          <ToggleOption key={index} label={option} />
        ))}

        <div className="flex gap-5 self-center mt-5 max-w-full text-sm font-medium tracking-normal leading-snug text-center whitespace-nowrap w-[268px]">
          <ActionButton
            text="Edit"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6a99887ded36492dec48b6e64278fff68195da252e2ebf0f065f5f1198c76ea7?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            bgColor="bg-blue-500"
          />
          <ActionButton
            text="Deactivate"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8eededb5b6b9e79fb644e3f175e530dd6475687d43eb9875ca51044af72a5c92?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            bgColor="bg-red-600"
          />
        </div>
      </div>

      <button className="flex overflow-hidden gap-2 justify-center items-center self-center px-6 py-4 mt-5 w-full text-sm font-medium tracking-normal leading-snug text-center text-white bg-amber-400 rounded max-w-[560px] min-h-[48px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 items-center self-stretch my-auto">
          <span className="self-stretch my-auto">Report as Lost</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/66de47a230a0efffb14233b1e33a676e0327ce0549735d2d360fec32d8082f56?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </div>
      </button>
    </div>
  );
}
