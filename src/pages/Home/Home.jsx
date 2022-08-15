import "./home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import LastProduct from "../../components/LastProduct/LastProduct";
import LastUser from "../../components/LastUser/LastUser";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="product"/>
          <Widget type="category"/>
        </div>
        <div className="charts">
          <LastProduct />
          <LastUser />
        </div>
        <br />
        <div className="listContainer">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home


// 3 a 6 paneles simples con los siguientes totales:
// Total de productos - ok
// Total de usuarios - ok
// Total de categorías - ok
// ● Panel de detalle de último producto o usuario creado. - ok / ok
// ● Panel con el listado de productos. - ok

// ● Panel de categorías con el total de productos de cada una.

// (Opcional) Funcionalidades adicionales:
// ● Total de productos vendidos / total de ventas.
// ● Últimos 5 productos vendidos / los 5 más vendidos.
// ● Vista de creación de productos como Administrador.
// ● Vista de edición de productos como Administrador.
// ● Opción de eliminar productos como Administrador.