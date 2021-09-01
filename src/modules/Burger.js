import React from "react";
import Food from "./Food";

export default function Burger() {
  return (
    <div>
      <div className="breadTop"></div>
      <Food food="beef"></Food>
      <Food food="cheese"></Food>
      <Food food="salad"></Food>

      <div className="breadBottom"></div>
    </div>
  );
}
