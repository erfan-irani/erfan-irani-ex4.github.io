import { useState } from "react";
import RateItem from "./RateItem";

export default function Rate() {
  const [starNumber, setStarNumber] = useState(0);
  const [starHoverNumber, setStarHoverNumber] = useState(0);

  return (
    <span
      style={{
        height: "80px",
        fontSize: 60,
        display: "flex",
        alignItems: "center",
      }}
      onMouseLeave={() => setStarHoverNumber(0)}
    >
      <span style={{ fontSize: "45px", fontFamily: "sans-serif" }}>
        Rate us:
      </span>
      {[...Array(5)].map((_, index) => (
        <RateItem
          key={index}
          selectedStar={starHoverNumber === 0 && index < starNumber}
          hoveredStar={index < starHoverNumber}
          handleOnClick={() => setStarNumber(index + 1)}
          handleOnMouseEnter={() => setStarHoverNumber(index + 1)}
        />
      ))}
   
    </span>
  );
}
