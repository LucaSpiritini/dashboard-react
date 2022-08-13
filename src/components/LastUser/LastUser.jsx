import "./lastUser.scss";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import MoreVertIcon from "@mui/icons-material/MoreVert"
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

import LastUserPhoto from "../../assets/img/user-pez.png"

// ● Panel de detalle de último usuario creado.

const Chart = () => {
  return (
    <div className="chart">

      <div className="top">

        <h1 className="title">Último usuario creado</h1>
        <MoreVertIcon fontSize="small" />
        
      </div>

      <div className="bottom">

        <h1 className="title">Nombre y Apellido</h1>

        <img className="productPhoto" src={ LastUserPhoto } alt="" />

        <p className="phoneNumber">+54911-85479384</p>
        
        <div className="summary">

          {/* <div className="item"> */}

            <div className="createdAt">Fecha de registro</div>

          {/* </div> */}
        </div>

      </div>
    </div>
  );
};

export default Chart
