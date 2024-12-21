import * as React from "react";
import QRCodeItem from "./QRCodeItem";
import { Header } from "../loginForm/Header";

const qrCodeItems = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/50f96e2c1ec09b3806fa497bb5078ce92630b4a771f372916df9c4ecc68c9681?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    title: "Asus Laptop",
    category: "Personal Belongings",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0addce387f60c535c4e0cc1797bd186ba12cce630e86c4974ab1f129c444ddf3?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    title: "Apple Airpods",
    category: "Personal Belongings",
  },
];

export default function QRCodeManager() {
  return (
    <div className="flex flex-col items-center w-full bg-white pb-[544px] max-md:pb-24 max-md:max-w-full">
      <Header title="Manage QR Codes" />
      {qrCodeItems.map((item, index) => (
        <QRCodeItem
          key={index}
          image={item.image}
          title={item.title}
          category={item.category}
        />
      ))}
    </div>
  );
}
