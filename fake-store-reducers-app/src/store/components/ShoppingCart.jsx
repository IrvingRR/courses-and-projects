import { Button } from "react-bulma-components";
import { BiX } from "react-icons/bi";
import { ShoppingCartElement, CartHeader, CartTitle, CloseButton, CartFooter, CartFooterData } from "./ShoppingCart.styles";
import { CartProducts } from "./CartProducts";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts";

export const ShoppingCart = ({ isActivated, hiddeCart }) => {

    const { shoppingCartState, incrementAmountProduct, decrementAmountProduct, removeProductFromCart } = useContext(ShoppingCartContext);

    const subtotal = shoppingCartState.products.reduce((acc, product) => acc + (product.price * product.amount), 0);
    const total = shoppingCartState.discount ? (shoppingCartState.discount / 100) * subtotal : subtotal; 
    
  return (
    <ShoppingCartElement isActive={isActivated}>
        <CartHeader>
            <CartTitle>
                <h2>My order</h2>
                <p>Products: {shoppingCartState.products.length}</p>
            </CartTitle>
            <CloseButton onClick={hiddeCart}>
                <BiX/>
            </CloseButton>
        </CartHeader>
        <CartProducts productsCart={shoppingCartState.products} incrementAmountProduct={incrementAmountProduct} decrementAmountProduct={decrementAmountProduct} removeProductFromCart={removeProductFromCart}/>
        <CartFooter>
            <CartFooterData>
                <p>Subtotal</p>
                <p>${subtotal}</p>
            </CartFooterData>
            <CartFooterData>
                <p>Discount</p>
                <p>%{shoppingCartState.discount}</p>
            </CartFooterData>
            <CartFooterData>
                <strong>Total</strong>
                <strong>${total}</strong>
            </CartFooterData>
            <Button color='danger'>Buy</Button>
        </CartFooter>
    </ShoppingCartElement>
  )
};