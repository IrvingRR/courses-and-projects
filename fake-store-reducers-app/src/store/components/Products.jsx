import { useContext } from "react";
import { toast } from "react-hot-toast";
import { ShoppingCartContext } from "../../contexts";
import { ProductCard } from "./ProductCard";
import { ProductsContainer } from "./Products.styles";

export const Products = ({ products, isLoading }) => {

  const { shoppingCartState, addProductToCart, incrementAmountProduct } = useContext(ShoppingCartContext);

  const handleAddProductToCart = (product) => {

    const productExistAlready = shoppingCartState.products.find(productCart => productCart.id === product.id);

    if(productExistAlready) {
      incrementAmountProduct(product.id);
      toast.success('Increased amount');

    } else {
      const newProduct = { ...product, amount: 1, subtotal: product.price };
      addProductToCart(newProduct);
      toast.success('Product added to cart');
    }
}
  
  return (
    <ProductsContainer>
      { isLoading && <h2>Loading</h2> }
      { !isLoading && products.length > 0 

        ? products.map(product => <ProductCard key={product.id} product={product} addProductToCart={handleAddProductToCart}/>)
        : products.length === 0 && !isLoading && <h2>No products</h2>
      
      }
    </ProductsContainer>
  );
}
