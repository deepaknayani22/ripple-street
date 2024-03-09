import React from "react";
import "./cards.css";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import { useState } from "react";

export default function Card({ thumbnail, name }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="card"
    >
      <CardImage thumbnail={thumbnail} />
      <CardContent name={name} isHovered={isHovered} />
    </div>
  );
}
