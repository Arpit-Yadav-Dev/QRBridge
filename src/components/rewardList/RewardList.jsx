import * as React from "react";
import RewardCard from "./RewardCard";

const RewardList = () => {
  const rewards = [
    { reward: "100", note: "Return the product safely" },
    { reward: "200", note: "Return within 7 days" },
    { reward: "50", note: "Keep original packaging" }
  ];

  return (
    <div className="flex flex-col gap-4">
      {rewards.map((item, index) => (
        <RewardCard 
          key={index}
          reward={item.reward}
          note={item.note}
        />
      ))}
    </div>
  );
};

export default RewardList;