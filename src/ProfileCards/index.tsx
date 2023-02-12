import React from "react";
import "./ProfileCards.css";

const profiles = [
  {
    symbol: "MM",
  },
  {
    symbol: "RA",
  },
  {
    symbol: "DA",
  },
  {
    symbol: "SE",
  },
];
const ProfileCards = () => {
  return (
    <div className="profilecards">
      {profiles.map((item, id) => {
        return (
          <div key={id} className="profilecard">
            {item.symbol}
          </div>
        );
      })}
    </div>
  );
};

export default ProfileCards;
