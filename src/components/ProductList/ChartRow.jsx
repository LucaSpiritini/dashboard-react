import React from "react";

const ChartRow = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
    </tr>
  );
}

export default ChartRow
