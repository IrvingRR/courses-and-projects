import { createCostService } from "../services/costs";

export const costsReducer = (state = [], action ) => {
    console.log(state);

    switch (action.type) {
        case '[Cost] - create':
            return [...state, action.payload];

        case '[Cost] - delete':
            return state.filter(cost => cost.id !== action.payload);
    
        default:
            break;
    }

}