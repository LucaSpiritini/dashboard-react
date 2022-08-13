import "./lastProduct.scss";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

import LastProductPhoto from "../../assets/img/accesorio-perro-arnes-rojo.png"

// ● Panel de detalle de último producto creado.

const Featured = () => {
  return (
    <div className="featured">

      <div className="top">

        <h1 className="title">Último producto creado</h1>
        <MoreVertIcon fontSize="small" />
        
      </div>

      <div className="bottom">

        <h1 className="title">Nombre producto</h1>

        <img className="productPhoto" src={ LastProductPhoto } alt="" />

        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae totam, illo repudiandae doloremque suscipit eveniet natus consequuntur ex perspiciatis qui itaque officia veniam a quos nemo perferendis earum dignissimos!</p>
        
        <div className="summary">

          <div className="item">

            <div className="itemPrice">Precio</div>
            
            <div className="itemResult positive">
              <KeyboardArrowUpIcon />
              <div className="amount">$12.4</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Featured
