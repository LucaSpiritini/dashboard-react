import "./products.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import ProductList from "../../components/ProductList/ProductList"

const Products = () => {
  return (
    <div className="products">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="lastContainer">
          <ProductList />
        </div>
      </div>      
    </div>
  )
}

export default Products