import { shoppingCartTypes } from "../types";

export const shoppingCartReducer = (state = {}, action) => {

    switch (action.type) {
        case shoppingCartTypes.add:
            return { 
                ...state, 
                products: [...state.products, action.payload],
            };

        case shoppingCartTypes.increment: 
            return { 
                ...state, 
                products: state.products.map(product => product.id === action.payload ? { ...product, amount: product.amount + 1 } :  product),
            };
        

        case shoppingCartTypes.decrement: 
            return { 
                ...state,
                products: state.products.map(product => product.id === action.payload ? { ...product, amount: product.amount - 1 } :  product),
            };
        

        case shoppingCartTypes.remove: 
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            }
            
                
        default:
            return state;
    }

};