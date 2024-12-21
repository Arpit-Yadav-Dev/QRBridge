import * as React from "react";

export function ImageGallery() {
  return (
    <div className="flex gap-5 self-center max-w-full w-[100px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dbccd04c00918d5408cad620fc7fdd704cc5826f2b76f5a39c5bbe8fdeac877?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
        alt="QR code preview"
        className="object-contain shrink-0 max-w-full rounded aspect-square shadow-[0px_8px_16px_rgba(0,0,0,0.06)] w-24"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef28b227c79963bc0d59465f0fd8b89bc56be55b01dd094ce2416df1e2542c84?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
        alt="Item preview"
        className="object-contain shrink-0 max-w-full rounded aspect-square shadow-[0px_8px_16px_rgba(0,0,0,0.06)] w-24"
      />
    </div>
  );
}
