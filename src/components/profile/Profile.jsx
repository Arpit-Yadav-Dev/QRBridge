import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileImage from "./ProfileImage";
import InfoSection from "./InfoSection";

function Profile() {
  const personalInfo = [
    { label: "Name", value: "Sibin TR" },
    { label: "Phone No", value: "9896578594" },
    { label: "Date of Birth", value: "10-08-1996" },
    { label: "Gender", value: "Male" },
    { label: "Blood Group", value: "0+" },
    { label: "Height", value: "-- Not Provided --" },
    { label: "Weight", value: "-- Not Provided --" },
    { label: "Identification Mark", value: "-- Not Provided --" },
  ];

  const emergencyContacts = [
    { label: "Name", value: "Sibin TR" },
    { label: "Phone No", value: "9896578594" },
    { label: "Relation", value: "Brother" },
  ];

  const address = [
    { label: "Address", value: "Thazhathethil" },
    { label: "City", value: "Pattambi" },
    { label: "State", value: "Kerala" },
    { label: "Zip / Pincode", value: "679887" },
  ];

  return (
    <div className="flex flex-col items-center rounded-none max-w-[600px]">
      <ProfileHeader />
      <ProfileImage />
      <InfoSection title="Personal Information" items={personalInfo} />
      <InfoSection title="Emergency Contacts" items={emergencyContacts} />
      <InfoSection title="Address" items={address} />
    </div>
  );
}

export default Profile;
