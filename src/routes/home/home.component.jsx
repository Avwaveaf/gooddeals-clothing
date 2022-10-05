import { Outlet } from "react-router-dom";

import Categories from "../../components/categories-container/categories-container-components";
import categoriesData from "../../components/categories-data/categories-data";
const Home=()=> {

  return (
    <div>
    <Outlet/>
    <Categories categories={categoriesData}/>
    </div>
  );
}

export default Home;
