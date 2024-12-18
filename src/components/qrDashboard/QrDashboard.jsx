import * as React from "react";
import QrFeatureCard from "./QrFeatureCard";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9330eb8827d102af613e63ae287eb203c7a6134982093c8319b444cd641d0a9?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    text: "Scan QR Code",
    bgColor: "bg-sky-100",
    textColor: "text-sky-600",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/74706c72ba4284636b58b4618db7d65dd6c18869bfd073b648bcbd6c80eaf00e?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    text: "Add New QR Code",
    bgColor: "bg-emerald-100 bg-opacity-70",
    textColor: "text-green-600",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aeb5bca2f24022b99ed5ed789ed9da5284b11a18965ed149c96c7ca556ed8519?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    text: "Manage QR Codes",
    bgColor: "bg-amber-100",
    textColor: "text-amber-400",
  },
];

function QrDashboard() {
  return (
    <div className="flex flex-col px-5 pt-5 w-full bg-white pb-[538px] max-md:pb-24 max-md:max-w-full">
      {features.map((feature, index) => (
        <div key={feature.text} className={index > 0 ? "mt-5" : ""}>
          <QrFeatureCard
            icon={feature.icon}
            text={feature.text}
            bgColor={feature.bgColor}
            textColor={feature.textColor}
            onClick={() => console.log(`Clicked ${feature.text}`)}
          />
        </div>
      ))}
    </div>
  );
}

export default QrDashboard;
