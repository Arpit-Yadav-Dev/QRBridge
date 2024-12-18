import React from "react";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    title: "Personal Belongings",
    items: ["Wallet", "Keys", "Electronics", "Wearables"],
  },
  {
    title: "Vehicles",
    items: ["Cars", "Bicycle", "Motorcycle", "Scooters"],
  },
  {
    title: "Travel Items",
    items: ["Luggage", "Travel Accessories"],
  },
  {
    title: "Pets",
    items: ["Pet", "Pet Accessories"],
  },
  {
    title: "Documents & Essentials",
    items: ["ID", "Files"],
  },
  {
    title: "Other",
    items: [],
  },
];

function CategoryList() {
  return (
    <div className="flex flex-col px-5 pt-6 pb-52 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <h1 className="self-center text-base font-medium tracking-normal text-zinc-900">
        Select Category
      </h1>
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          title={category.title}
          items={category.items}
          className={
            index === categories.length - 1 ? "-mb-10 max-md:mb-2.5" : ""
          }
        />
      ))}
    </div>
  );
}

export default CategoryList;
