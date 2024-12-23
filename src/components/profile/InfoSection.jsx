import React from "react";

function InfoSection({ title, items }) {
  return (
    <>
      <div className="px-5 py-4 mt-5 min-w-full text-sm font-medium tracking-normal leading-snug bg-gray-200	 text-zinc-900 w-[560px]">
        {title}
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-wrap gap-5 justify-between p-5 w-full text-sm tracking-normal leading-snug bg-white border-b border-gray-200 max-w-[560px] max-md:max-w-full"
        >
          <div className="text-zinc-500">{item.label}</div>
          <div
            className={`${
              item.value === "-- Not Provided --"
                ? "text-gray-300"
                : "font-medium text-zinc-900"
            } text-right`}
          >
            {item.value}
          </div>
        </div>
      ))}
      {/* <div className="flex overflow-hidden gap-1.5 px-6 py-3 mt-5 max-w-full text-sm font-medium tracking-normal leading-snug text-center text-white whitespace-nowrap bg-blue-500 rounded w-[124px] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/423010a1c1f7b1f0a7f10289d9c948874474aee68fccc57c0c1191185d721c0e?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
          className="object-contain shrink-0 w-3.5 aspect-square"
          alt="Edit"
        />
        <div className="my-auto">Edit</div>
      </div> */}
    </>
  );
}

export default InfoSection;
