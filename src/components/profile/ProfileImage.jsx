import React from "react";

function ProfileImage() {
  return (
    <div className="py-5 pr-20 pl-5 mt-5 max-w-full bg-zinc-100 w-[560px] max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bee59c66a78f4a059f878bb1cf2e9b0c595c6419042035b5c5cbcbbd24be278?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            className="object-contain shrink-0 w-20 rounded-full aspect-square max-md:mt-10"
            alt="Profile"
          />
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-sm font-medium tracking-normal leading-snug text-zinc-900 max-md:mt-10">
            <div className="self-start">Sibin TR</div>
            <div className="mt-4">sibinyou@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
