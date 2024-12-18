import * as React from "react";

const QrFeatureCard = ({ icon, text, bgColor, textColor, onClick }) => {
  return (
    <div 
      className={`flex flex-col justify-center items-center px-16 py-4 w-full text-sm font-medium tracking-normal leading-snug ${textColor} ${bgColor} rounded max-md:px-5 max-md:max-w-full`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="flex gap-4 max-w-full w-[171px]">
        <img
          loading="lazy"
          src={icon}
          alt={text}
          className="object-contain w-5 aspect-square"
        />
        <div className="grow shrink my-auto">{text}</div>
      </div>
    </div>
  );
}

export default QrFeatureCard;