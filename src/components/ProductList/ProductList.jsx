import React, { Component } from "react";
import ChartRow from "./ChartRow";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import "./productList.scss";

// Panel con el listado de productos

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      tableRowsData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/products")
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
          <Link to="/products/new" style={{ textDecoration: "none" }} className="link">
            Add New
          </Link>
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
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Id</th>
                <th>Nombre de producto</th>
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

// export default Chart
export default ProductList
