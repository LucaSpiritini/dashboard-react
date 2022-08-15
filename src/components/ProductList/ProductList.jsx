import React, { Component } from "react";
import ChartRow from "./ChartRow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./productList.scss";

// Panel con el listado de productos

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      tableRowsData: [],
    };
  }

  componentDidMount() {
    fetch("/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        this.setState({ tableRowsData: products.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="chart">
        <div className="productListTop">
          <h1 className="title">Todos los productos</h1>
          <MoreVertIcon fontSize="small" />
        </div>

        <div className="productListBottom">
          <table
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre de producto</th>
                {/* <th></th>
                <th></th>
                <th></th> */}
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Id</th>
                <th>Nombre de producto</th>
                {/* <th></th>
                <th></th>
                <th></th> */}
              </tr>
            </tfoot>
            <tbody>
              {this.state.tableRowsData.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Chart
