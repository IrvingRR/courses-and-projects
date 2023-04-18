import { useReducer } from "react";
import { costsReducer } from "../reducers/costsReducer";
import { getCostsService } from "../services/costs";

export const useCosts = () => {

    const initFunction = async () => {
        fetch('http://localhost:3005/costs')
        .then(response => response.json())
        .then(costs => costs);
    }

    const [costs, dispatch] = useReducer(costsReducer, [], initFunction);

    const createCost = (cost) => {

        const action = {
            type: '[Cost] - create',
            payload: cost
        };

        dispatch(action);

    }

    const deleteCost = (id) => {
        const action = {
            type: '[Cost] - delete',
            payload: id
        };

        dispatch(action);
    };

    return {
        costs,
        createCost,
        deleteCost
    };
};