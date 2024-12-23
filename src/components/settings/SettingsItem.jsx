import * as React from "react";
import { useCustomNavigate } from "../../functions/navigate";

function SettingsItem({ label, iconSrc, url }) {
  const navigate = useCustomNavigate();
  return (
    <div
      onClick={() => navigate(url)}
      className="flex flex-wrap gap-5 justify-between p-5 w-full whitespace-nowrap rounded border border-gray-200 border-solid bg-neutral-50 shadow-[0px_4px_16px_rgba(0,0,0,0.04)] max-md:max-w-full"
      role="button"
      tabIndex={0}
    >
      <div className="my-auto">{label}</div>
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 w-4 aspect-square"
      />
    </div>
  );
}

export default SettingsItem;
