import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/navigationbar/navigationBar.component";


const Shop = ()=>{
  return <h2>im a shop page</h2>
}

const App=()=> {

  return(
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      </Route>



    </Routes>
  )
   
}

export default App;
