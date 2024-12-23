import React, { useState } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { EmergencyContact } from "./EmergencyContact";
import { AddressSection } from "./AddressSection";
import { FormButtons } from "./FormButtons";
import { Header } from "../loginForm/Header";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "Sibin TR",
    dob: "20-07-1998",
    bloodGroup: "0 +ve",
    emergencyName: "Sibin TR",
    emergencyPhone: "20-07-1998",
    emergencyRelation: "Brother",
    address: "Thazhathethil",
    city: "Palakkad",
    state: "Kerala",
    pincode: "679337",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add API call or processing logic here
  };

  return (
    <div className="flex flex-col pb-5 w-full bg-white max-md:max-w-full">
      <Header title="Profile" />
      <form
        className="flex flex-col px-5 mt-5 w-full text-zinc-500 max-md:max-w-full"
        onSubmit={handleSubmit}
      >
        <PersonalInfo data={formData} onInputChange={handleInputChange} />
        <EmergencyContact data={formData} onInputChange={handleInputChange} />
        <AddressSection data={formData} onInputChange={handleInputChange} />
        <FormButtons />
      </form>
    </div>
  );
}
