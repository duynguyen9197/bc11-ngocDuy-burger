import React from "react";
import { useSelector } from "react-redux";

export default function Food(props) {
  const { food } = props;
  const { burger } = useSelector((state) => state.burger);
  let foodList = [];
  for (let i = 0; i < burger[food]; i++) {
    foodList.push(<div key={i} className={food}></div>);
  }
  return <div>{foodList}</div>;
}
