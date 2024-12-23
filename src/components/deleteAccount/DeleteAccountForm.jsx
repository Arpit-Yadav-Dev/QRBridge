import * as React from "react";
import { SelectInput } from "./SelectInput";
import { DeleteButton } from "./DeleteButton";
import { AlertBanner } from "./AlertBanner";
import { Header } from "../loginForm/Header";

function DeleteAccountForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col pt-6 w-full bg-white pb-[536px] max-md:pb-24 max-md:max-w-full"
    >
      <Header title="Delete Account" />
      <div className="flex flex-col px-5 mt-11 mb-0 w-full text-sm tracking-normal max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        <AlertBanner message="We're sorry to see you go. Please let us know why you're leaving to help us improve" />
        <SelectInput label="Reason" value="xyz" onChange={() => {}} />
        <DeleteButton />
      </div>
    </form>
  );
}

export default DeleteAccountForm;
