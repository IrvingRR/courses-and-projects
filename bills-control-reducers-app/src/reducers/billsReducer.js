export const billsReducer = (state = [], action) => {

    switch (action.type) {
        case '[BILLS] - add bill':
            return [...state, action.payload];

        case '[BILLS] - remove bill':
            return state.filter(bill => bill.id !== action.payload);

        case '[BILLS] - change amount':

            return state.map(bill => {
                if(bill.id === action.payload.id) {
                    return {
                        ...bill,
                        amount: action.payload.amount
                    }
                }

                return bill;
            }) 
    
        default:
            return state;
    }

};