import { useReducer } from "react"
import productsReducer from "../reducers/productsReducer"

const useProducts = () => {

    const [products, dispatch] = useReducer(productsReducer, []);

    const createProduct = (product) => {
        const action = {
            type: '[PRODUCTS] - CREATE',
            payload: product
        }

        dispatch(action);
    }

    const deleteProduct = (id) => {
        const action = {
            type: '[PRODUCTS] - DELETE',
            payload: id
        }

        dispatch(action)
    }

    const editProduct = (id, product) => {
        const action = {
            type: '[PRODUCTS] - EDIT',
            payload: { id, product }
        }

        dispatch(action)
    }

    return {
        products,
        createProduct,
        deleteProduct,
        editProduct
    }

}

export default useProducts