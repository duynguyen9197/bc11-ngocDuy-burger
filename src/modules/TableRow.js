import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";

export default function TableRow(props) {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.burger);
  const handleIncrease = () => {
    const action = {
      type: "Increase",
      payload: {
        food: props.food,
      },
    };
    dispatch(action);
  };
  const handleDecrease = () => {
    const action = {
      type: "Decrease",
      payload: {
        food: props.food,
      },
    };
    dispatch(action);
  };
  return (
    <tr>
      <td>{props.food}</td>
      <td>
        <Button onClick={handleIncrease} color="success">
          +
        </Button>
        <Button onClick={handleDecrease} color="danger">
          -
        </Button>
      </td>

      <td>{menu[props.food]}</td>
    </tr>
  );
}
