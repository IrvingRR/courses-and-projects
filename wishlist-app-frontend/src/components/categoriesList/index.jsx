import { CategoryItem } from "../categoryItem"
import { ListStyled } from "./styles"

export const CategoriesList = ({ categories, openModal, setCategoryData }) => {

  return (
    <ListStyled>
      {
        categories.length > 0
        ? categories.map(category => <CategoryItem key={ category.id } data={ category } openModal={ openModal } setCategoryData={setCategoryData}/>)
        : <h3>No categories</h3>
      }
    </ListStyled>
  )
}
