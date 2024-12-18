import * as React from "react";
import { IconContainer } from "./IconContainer";
import { HeroImage } from "./HeroImage";

export function HeroLayout() {
  return (
    <div className="flex flex-col px-5 pt-5 pb-72 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <IconContainer />
      <HeroImage />
    </div>
  );
}
