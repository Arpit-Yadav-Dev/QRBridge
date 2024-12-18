import * as React from "react";
import { InputFieldReward } from "./InputFieldReward";

function RewardForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-5 w-full bg-white">
      <img
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
        value="100"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4d44f638486f4a68f0abf78c7b3e5d0e9b5b6c593c53f3d1fbef454f0dab1e?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
        type="text"
      />

      <InputFieldReward
        label="Note"
        value="Return the product safely"
        type="textarea"
      />

      <button
        type="submit"
        className="overflow-hidden gap-2 self-stretch px-6 py-4 mt-5 text-center text-white whitespace-nowrap bg-sky-600 rounded min-h-[40px]"
      >
        Submit
      </button>
    </form>
  );
}

export default RewardForm;
