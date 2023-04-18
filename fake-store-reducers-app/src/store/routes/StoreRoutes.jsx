import { Routes, Route } from "react-router-dom"
import { ShoppingCartProvider } from "../../contexts"
import { StorePage, ProductPage } from "../pages"
import { StoreTemplate } from "../Templates/StoreTemplate"

export const StoreRoutes = () => {
  return (
    <>
    <ShoppingCartProvider>
      <Routes>
          <Route path='/' element={ <StoreTemplate/> }>
              <Route path='store' index element={ <StorePage/> }/>
              <Route path='product/:id' element={ <ProductPage/> }/>
              <Route path='favorites' index element={ <h2>Favorites list</h2> }/>
          </Route>
      </Routes>
    </ShoppingCartProvider>
    </>
  );
};
