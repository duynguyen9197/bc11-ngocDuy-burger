import React from "react";
import { useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import TableRow from "./TableRow";

export default function Menu() {
  const { total } = useSelector((state) => state.burger);
  return (
    <Table>
      <thead>
        <tr>
          <th>Chọn thức ăn</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">Food</td>
          <td>Price</td>
        </tr>
        <TableRow food="salad" />
        <TableRow food="cheese" />
        <TableRow food="beef" />
        <tr>
          <td colSpan="3">Tổng tiền:{total} </td>
        </tr>
        <tr>
          <td colSpan="3">
            <Button>Thanhc Toán</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
