import { Button } from "react-bulma-components";
import { CartProductElement } from "./CartProduct.styles";

export const CartProduct = ({ product, incrementAmountProduct, decrementAmountProduct, removeProductFromCart }) => {

  const handleDecrementProduct = () => {

    if(product.amount <= 1) {

      removeProductFromCart(product.id);

    } else {

      decrementAmountProduct(product.id);

    }
  }

  return (
    <CartProductElement>
                <div className="cart-product-information">
            <img src={product.image} alt={product.title} />
            <div>
                <h3>{ product.title }</h3>
                <span>${product.price}</span>
            </div>
        </div>
        <div className="cart-product-actions">
            <Button size='small' onClick={() => handleDecrementProduct()}>-</Button>
            <span>{product.amount}</span>
            <Button size='small' color='danger' onClick={() => incrementAmountProduct(product.id)}>+</Button>
        </div>
    </CartProductElement>
  )
}
