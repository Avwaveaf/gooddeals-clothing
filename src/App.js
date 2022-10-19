import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/navigationbar/navigationBar.component";
import Login from "./routes/login/login.component";
import Shop from "./routes/shop/shop.component";

const App=()=> {

  return(
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="login" element={<Login/>}/>
      </Route>



    </Routes>
  )
   
}

export default App;
