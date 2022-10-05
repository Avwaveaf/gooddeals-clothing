import "./categories-container-styles.scss"
import CategoryItem from "../category-item/category-item-components";


const Categories=({categories})=>{
    return(
    <div className="categories-container">
    {
      categories.map((categories)=>
         (
          <CategoryItem key={categories.id} category={categories}/>
        )
      )
    }

    </div>)

}

export default Categories;