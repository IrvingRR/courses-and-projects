const productsReducer = (state = [], action) => {

    switch (action.type) {
        case '[PRODUCTS] - CREATE':
            return [...state, action.payload]

        case '[PRODUCTS] - DELETE':
            return state.filter(product => product.id != action.payload)

        case '[PRODUCTS] - EDIT':
            const currentState = state.filter(product => product.id != action.payload.id);
            return [...currentState, action.payload.product]

        default:
            break;
    }

}

export default productsReducer