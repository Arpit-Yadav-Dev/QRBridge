import * as React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { GenderSelector } from "./GenderSelector";

function AccountSetup() {
  const formFields = [
    { label: "Name", value: "Sibin", type: "text" },
    { label: "Email", value: "sibinyou@gmail.com", type: "email" },
  ];

  return (
    <form className="flex flex-col w-full bg-white pb-[461px] max-md:pb-24 max-md:max-w-full">
      <div className="px-16 py-6 w-full text-base tracking-normal leading-snug bg-white shadow-[0px_8px_16px_rgba(0,0,0,0.06)] text-zinc-900 max-md:px-5 max-md:max-w-full">
        Please Set Up Your Account
      </div>
      <div className="flex flex-col px-5 mt-5 mb-0 w-full max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-col items-start text-xs tracking-tight leading-relaxed text-zinc-500">
            <div className="text-base tracking-normal leading-snug text-ellipsis text-zinc-900">
              9809754709
            </div>
            <div className="self-stretch mt-3">
              OTP will be sent to your number for verification
            </div>
            <div className="mt-6">Name</div>
          </div>
          <Button
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b24799aecdfe4a1b92731d8ac0c70091e018b9d24dd1e497e327c81a1a307b0e?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            text="Edit"
            variant="primary"
          />
        </div>

        {formFields.map((field, index) => (
          <InputField
            key={index}
            label={field.label}
            value={field.value}
            type={field.type}
          />
        ))}

        <GenderSelector />

        <Button text="Send OTP" variant="full" className="mt-10" />
      </div>
    </form>
  );
}

export default AccountSetup;
