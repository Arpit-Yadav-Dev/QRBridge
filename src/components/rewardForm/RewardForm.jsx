import React, { useState } from "react";
import { InputFieldReward } from "./InputFieldReward";

function RewardForm({ onClose }) {
  const [reward, setReward] = useState("100");
  const [note, setNote] = useState("Return the product safely");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock submission logic
    console.log("Submitted Data:", { reward, note });

    // You can add your submission logic here, such as sending data to an API.
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 w-full max-w-lg bg-white rounded shadow-lg relative"
      >
        {/* <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          ✕
        </button> */}

        <img
          onClick={onClose}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a738a8f436e484faec3589780532b1eb7ad316396dd6c0f47abe14d9815664d?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
          className="object-contain self-end w-6 aspect-square"
          alt=""
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b99a832da9ae050cc1c703329a3b42ce4014d7d97c7da5cf796e57b444565443?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
          className="object-contain self-center mt-5 w-20 aspect-square"
          alt="Reward item icon"
        />
        <div className="self-center mt-5 text-base tracking-normal leading-6 text-center text-zinc-900 w-[243px]">
          Raise a Reward for the Lost Item
          <br />
          <span className="text-xs italic text-zinc-500">
            " You can post without offering a reward "
          </span>
        </div>

        <InputFieldReward
          label="Reward"
          value={reward}
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4d44f638486f4a68f0abf78c7b3e5d0e9b5b6c593c53f3d1fbef454f0dab1e?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
          type="text"
          onChange={(e) => setReward(e.target.value)}
        />

        <InputFieldReward
          label="Note"
          value={note}
          type="textarea"
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          type="submit"
          className="overflow-hidden gap-2 self-stretch px-6 py-4 mt-5 text-center text-white whitespace-nowrap bg-indigo-600 rounded min-h-[40px] hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RewardForm;
