import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import List from "./pages/List/List"
import Login from "./pages/Login/Login"
import New from "./pages/New/New"
import Single from "./pages/Single/Single"
import NotFound from "./pages/NotFound/NotFound"

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            
            <Route index element={ <Home /> }/>

            <Route path="login" element={ <Login /> }/>
            
            <Route path="users">
              <Route index element={ <List /> } />
              <Route path=":userId" element={ <Single /> } />
              <Route path="new" element={ <New /> } />
            </Route>
            
            <Route path="products">
              <Route index element={ <List /> } />
              <Route path=":productId" element={ <Single /> } />
              <Route path="new" element={ <New /> } />
            </Route>
            
            <Route path="*" element={ <NotFound /> } />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App