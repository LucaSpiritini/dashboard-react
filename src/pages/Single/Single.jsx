import "./single.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="titleSinglePage">Información de usuario</h1>
            <div className="item">
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">Jhon Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email: </span>
                <span className="itemValue">jhon-doe@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone: </span>
                <span className="itemValue">+1 234 56 789</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address: </span>
                <span className="itemValue">Calle Falsa N°123</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country: </span>
                <span className="itemValue">Springfield</span>
              </div>
            </div>
            </div>
          </div>
          <div className="right">

          </div>
        </div>
        <div className="bottom">

        </div>
      </div>
    </div>
  )
}

export default Single
