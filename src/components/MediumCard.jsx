import React from "react";
import "./mediumcard.css";
const MediumCard = ({ cardData }) => {
   
  return (
    <div className="medium-card">
      <div
        className="medium-card-circle"
        style={{ backgroundColor: cardData.color }}
      ></div>
      <span className="medium-card-title">{cardData.title}</span>
      {cardData?.data.map(({ key, value }, index) => (
        <div className="medium-card-data" key={index}>
          <span className="medium-card-data-key">{key}</span>
          <span className="medium-card-data-value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default MediumCard;
