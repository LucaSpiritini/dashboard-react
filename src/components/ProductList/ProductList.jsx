import React, { Component } from "react";
import ChartRow from "./ChartRow";
import MoreVertIcon from "@mui/icons-material/MoreVert";

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      tableRowsData: [],
    };
  }

  componentDidMount() {
    fetch("/api/movies")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((movies) => {
        this.setState({ tableRowsData: movies.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="chart">
        <div className="top">
          <h1 className="title">Todos los productos</h1>
          <MoreVertIcon fontSize="small" />
        </div>

        <div className="bottom">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Calificación</th>
                <th>Premios</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Calificación</th>
                <th>Premios</th>
                <th>Duración</th>
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

export default Chart;
