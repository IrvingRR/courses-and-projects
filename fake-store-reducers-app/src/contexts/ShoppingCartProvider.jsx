import { useReducer } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { shoppingCartReducer } from '../reducers';
import { shoppingCartTypes } from "../types";

const initialState = {
    products: [],
    subtotal: 0,
    total: 0,
    discount: 30
};

export const ShoppingCartProvider = ({ children }) => {

    const [shoppingCartState, dispatch] = useReducer(shoppingCartReducer, initialState);

    const addProductToCart = (product) => {
        const action = {
            type: shoppingCartTypes.add,
            payload: product
        };

        dispatch(action);
        localStorage.setItem('fake-store-shopping-cart-products', JSON.stringify(shoppingCartState.products));
    }

    const incrementAmountProduct = (id) => {
        const action = {
            type: shoppingCartTypes.increment,
            payload: id
        }

        dispatch(action);
    }

    const decrementAmountProduct = (id) => {
        const action = {
            type: shoppingCartTypes.decrement,
            payload: id
        };

        dispatch(action);
    }

    const removeProductFromCart = (id) => {
        const action = {
            type: shoppingCartTypes.remove,
            payload: id
        };

        dispatch(action);
    }

    return (
        <ShoppingCartContext.Provider value={{ shoppingCartState, addProductToCart, incrementAmountProduct, decrementAmountProduct, removeProductFromCart }}>
            { children }
        </ShoppingCartContext.Provider>
    );

};