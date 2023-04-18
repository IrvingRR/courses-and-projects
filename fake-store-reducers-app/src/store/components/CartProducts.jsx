import { CartProduct } from "./CartProduct";
import { CartProductsElement } from "./CartProducts.styles";

export const CartProducts = ({ productsCart, incrementAmountProduct, decrementAmountProduct, removeProductFromCart }) => {

  return (
    <CartProductsElement>
          { productsCart.length > 0 
            ? productsCart.map(product => <CartProduct key={product.id} product={product} incrementAmountProduct={incrementAmountProduct} decrementAmountProduct={decrementAmountProduct} removeProductFromCart={removeProductFromCart}/>)
            : <h3>Don't have products in your cart</h3>
          }
    </CartProductsElement>

  )
}
