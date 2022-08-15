import React from "react";

const ChartRow = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      {/* <td>{props.}</td>
      <td>{props.}</td>
      <td>{props.}</td> */}
    </tr>
  );
}

export default ChartRow
